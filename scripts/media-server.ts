import express from 'express';
import cors from 'cors';
import { exec } from 'yt-dlp-exec'; // uses your custom typed declaration
import { ExecaChildProcess } from 'execa';
import sanitize from 'sanitize-filename'; // optional to clean up title strings
import dotenv from 'dotenv';
dotenv.config({path: '.env.local'});

const app = express();
app.use(cors());

app.get('/convert', async (req, res) => {
  const url = req.query.url as string;

  if (!url || !/^https?:\/\/(www\.)?youtube\.com\/watch\?v=/.test(url)) {
    res.status(400).send('Invalid YouTube URL');
    return;
  }

  try {
    // Step 1: Get video metadata
    const metadataJson = await exec(url, {
      dumpJson: true,
    });

    const metadata = JSON.parse(metadataJson.stdout);
    const title = sanitize(metadata.title || 'audio');
    const uploader = sanitize(metadata.uploader || 'unknown');
    console.log("Video Title: " + title);
    console.log("Uploader: " + uploader);

    const filename = `${title} - ${uploader}.mp3`;

    // Step 2: Set headers with sanitized filename
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    res.setHeader('Content-Type', 'audio/mpeg');

    // Step 3: Stream audio using exec
    const process: ExecaChildProcess = exec(
      url,
      {
        extractAudio: true,
        audioFormat: 'mp3',
        output: '-',
        quiet: true,
      }
    );

    process.stdout?.pipe(res);

    process.stderr?.on('data', (data: Buffer) => {
      console.error('[yt-dlp stderr]', data.toString());
    });

    process.on('error', (err) => {
      console.error('[yt-dlp error]', err);
      res.status(500).send('Streaming failed');
    });
  } catch (err) {
    console.error('[server error]', err);
    res.status(500).send('Could not convert video');
  }
});

const PORT = process.env.MEDIA_SERVER_PORT;
app.listen(PORT, () => {
  console.log(`✅ Media server running on http://localhost:${PORT}`);
});

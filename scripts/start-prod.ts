import { spawn } from 'child_process';
import dotenv from 'dotenv';
import path from 'path';

// Load .env.local manually
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const PORT = process.env.PORT || '3000';
const MEDIA_SERVER_PORT = process.env.MEDIA_SERVER_PORT || '4000';

console.log(`Starting Next.js on port ${PORT}`);
console.log(`Starting Media Server on port ${MEDIA_SERVER_PORT}`);

// Start Next.js production server
spawn('next', ['start', '-p', PORT], {
  stdio: 'inherit',
  shell: true,
});

// Start media server
spawn('tsx', ['scripts/media-server.ts'], {
  stdio: 'inherit',
  shell: true,
  env: { ...process.env, MEDIA_SERVER_PORT }, // inject env if needed
});

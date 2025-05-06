This is a YouTube to MP3 converter built using Next.js and Node.

## Pre-requisites
To install the application, the following programs are required:
- Node.js (it can be installed [here](https://nodejs.org/en))

## Getting Started

First, go to a directory on your machine where you prefer to install the application. Once in the directory, in a command line interface, do terminal, execute the following to download the source code: 

```bash 
git clone https://github.com/alexfishy12/youtube-to-mp3.git
```
**Note: if Git is not installed, you could also click on the '<> Code' button on Github, then 'Download ZIP' and extract into your preferred folder.**

Open the folder with the extracted source code, and create a new file in it called ".env.local" with the following contents:

```plaintext
NEXT_PUBLIC_API_BASE_URL=http://localhost
MEDIA_SERVER_PORT=50001 # can be changed
PORT=50000 # can be changed
```
*The port numbers can be changed to any unused port number between 49152 to 65535 (inclusive). Just make sure the two assigned ports are not the same. Also, make sure the file is not a txt file, make sure it is a .local file.*


After this is done, navigate to the folder in a terminal/command line interface by doing:
```bash
cd "YOUR/FILE/PATH/youtube-to-mp3"
```
**Note: You could also navigate to the folder in your file explorer, then while in the folder, right click and click 'Open in Terminal'.**

Then, do:
```bash
npm install
```

Then,
```bash
npm run build
```

Then,
```bash
npm start
```

The application uses `PORT` from the ".env.local" file to host your app on that port. For example, if `PORT=50000`, then once the app is running, you'd navigate to 
[http://localhost:50000](http://localhost:50000) with your browser to see the result.
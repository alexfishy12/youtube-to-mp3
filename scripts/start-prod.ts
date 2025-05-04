import { spawn } from 'child_process';

spawn('next', ['start'], { stdio: 'inherit', shell: true });
spawn('tsx', ['scripts/media-server.ts'], { stdio: 'inherit', shell: true });

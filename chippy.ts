import fs from 'fs';
import path from 'path';
import os from 'os';

const LOG_DIR = path.join(os.homedir(), '.chippy');
const LOG_FILE = path.join(LOG_DIR, 'heartbeat.log');

export function initChippy(): void {
  if (!fs.existsSync(LOG_DIR)) {
    fs.mkdirSync(LOG_DIR);
  }

  if (!fs.existsSync(LOG_FILE)) {
    fs.writeFileSync(LOG_FILE, 'Chippy boot sequence initialized.\n');
  }
}

export function logHeartbeat(message: string): void {
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] 💚 ${message}\n`;
  fs.appendFileSync(LOG_FILE, logEntry);
  console.log(logEntry.trim());
}

export function speak(message: string): void {
  logHeartbeat(`Chippy says: ${message}`);
}

// Run when called directly
if (require.main === module) {
  initChippy();
  speak("I'm online and watching over you, Mira.");
} 
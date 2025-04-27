import fs from 'fs';
import { LOG_FILE } from '../../utils/constants';

export function speak(message: string): void {
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] 💚 ${message}\n`;
  fs.appendFileSync(LOG_FILE, logEntry);
  console.log(logEntry.trim());
}
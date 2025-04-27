import { LOG_DIR, LOG_FILE } from "./constants";
import fs from 'fs';

export function initChippy(): void {
  if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR);
  if (!fs.existsSync(LOG_FILE)) fs.writeFileSync(LOG_FILE, 'Chippy boot sequence initialized.\n');
}
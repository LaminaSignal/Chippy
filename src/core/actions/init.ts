import { LOG_DIR, LOG_FILE } from "../../utils/constants";
import fs from 'fs';

export function initChippy(): void {
  console.log('Chippy boot sequence initialized.\n');
  if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR);
  if (!fs.existsSync(LOG_FILE)) fs.writeFileSync(LOG_FILE, 'Chippy boot sequence initialized.\n');
}
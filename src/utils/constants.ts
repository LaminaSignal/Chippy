import path from 'path';
import os from 'os';

export const LOG_DIR = path.join(os.homedir(), '.chippy');
export const LOG_FILE = path.join(LOG_DIR, 'heartbeat.log');
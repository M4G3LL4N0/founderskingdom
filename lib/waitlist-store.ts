import fs from 'fs';
import path from 'path';

const WAITLIST_FILE = path.join(process.cwd(), 'waitlist.json');

export function saveWaitlistEntry(entry: { name: string; email: string; company: string }) {
  try {
    // Read existing data
    const data = fs.existsSync(WAITLIST_FILE) 
      ? JSON.parse(fs.readFileSync(WAITLIST_FILE, 'utf8')) 
      : [];

    // Add new entry
    const newEntry = {
      ...entry,
      id: Date.now().toString(),
    };

    // Save updated data
    fs.writeFileSync(WAITLIST_FILE, JSON.stringify([...data, newEntry], null, 2));
    return newEntry;
  } catch (error) {
    console.error('Failed to save waitlist entry:', error);
    return null;
  }
}

export function getWaitlistCount() {
  try {
    const data = fs.existsSync(WAITLIST_FILE) 
      ? JSON.parse(fs.readFileSync(WAITLIST_FILE, 'utf8')) 
      : [];
    return data.length;
  } catch {
    return 0;
  }
}

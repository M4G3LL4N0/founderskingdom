import fs from 'fs';
import path from 'path';

const CONTACT_FILE = path.join(process.cwd(), 'contact.json');

export function saveContactEntry(entry: { name: string; email: string; message: string }) {
  try {
    // Read existing data
    const data = fs.existsSync(CONTACT_FILE) 
      ? JSON.parse(fs.readFileSync(CONTACT_FILE, 'utf8')) 
      : [];

    // Add new entry
    const newEntry = {
      ...entry,
      timestamp: new Date().toISOString(),
    };

    const updatedData = [...data, newEntry];
    fs.writeFileSync(CONTACT_FILE, JSON.stringify(updatedData, null, 2));
    return { success: true, message: 'Submission saved successfully' };
  } catch (error) {
    return { success: false, message: 'Failed to save submission' };
  }
}

export function getContactCount() {
  try {
    const data = fs.existsSync(CONTACT_FILE) 
      ? JSON.parse(fs.readFileSync(CONTACT_FILE, 'utf8')) 
      : [];
    return data.length;
  } catch {
    return 0;
  }
}

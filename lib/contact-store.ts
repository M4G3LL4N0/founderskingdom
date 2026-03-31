import { promises as fs } from "fs";
import path from "path";

export type ContactEntry = {
  name: string;
  email: string;
  message: string;
  createdAt: string;
};

const DATA_DIR = path.join(process.cwd(), ".data");
const DATA_FILE = path.join(DATA_DIR, "contact-submissions.json");

async function readEntries(): Promise<ContactEntry[]> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export async function saveContactEntry(entry: ContactEntry) {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    const entries = await readEntries();
    entries.push(entry);
    await fs.writeFile(DATA_FILE, JSON.stringify(entries, null, 2), "utf8");
    return {
      ok: true as const,
      count: entries.length,
    };
  } catch {
    return {
      ok: false as const,
      count: 0,
    };
  }
}

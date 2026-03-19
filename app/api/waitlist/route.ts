import { NextApiRequest, NextApiResponse } from 'next';
import { saveWaitlistEntry, getWaitlistCount } from '../../../lib/waitlist-store';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { name, email, company } = req.body;
    
    // Basic validation
    if (!name || !email || !company) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const savedEntry = saveWaitlistEntry({ name, email, company });
    if (savedEntry) {
      res.status(201).json({
        entry: savedEntry,
        count: getWaitlistCount(),
      });
    } else {
      res.status(500).json({ error: 'Failed to save entry' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

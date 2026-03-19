import { NextApiRequest, NextApiResponse } from 'next';
import { saveContactEntry } from '../../lib/contact-store';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }

  // Validate email format
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ success: false, message: 'Invalid email format' });
  }

  try {
    const result = await saveContactEntry({ name, email, message });
    return res.status(201).json(result);
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Server error' });
  }
}

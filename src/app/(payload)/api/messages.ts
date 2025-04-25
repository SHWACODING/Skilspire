import { NextApiRequest, NextApiResponse } from 'next';
import payload from 'payload';

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { name, email, phone,  message } = req.body;

    // Validate input
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    // Save to the Payload CMS `messages` collection
    const result = await payload.create({
      collection: 'messages', // Make sure this matches your collection slug in Payload CMS
      data: {
        name,
        email,
        phone,
        message,
      },
    });

    res.status(200).json({ message: 'Message saved successfully!', data: result });
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).json({ message: 'Failed to save message.' });
  }
}

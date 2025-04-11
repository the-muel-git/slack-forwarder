import { sendMessage } from '../lib/slack.js';

export default async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) return res.status(400).send('Missing "text" in request body');

    await sendMessage(text);
    res.json({ status: 'success', message: 'Sent to Slack' });
  } catch (err) {
    console.error('Slack Error:', err.message);
    res.status(500).json({ error: 'Slack send failed' });
  }
};
import { WebClient } from '@slack/web-api';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({ path: path.join(__dirname, '../.env') });

const slackToken = process.env.SLACK_TOKEN;
const slackChannel = process.env.SLACK_CHANNEL;
const client = new WebClient(slackToken);

/**
 * Send a message to a Slack channel
 * @param {string} text - The message text to send
 * @param {string} channel - The channel ID to send to (defaults to env variable)
 * @returns {Promise} - The Slack API response
 */
export async function sendMessage(text, channel = slackChannel) {
  try {
    const result = await client.chat.postMessage({
      channel,
      text
    });
    
    return result;
  } catch (error) {
    console.error('Error sending message to Slack:', error);
    throw error;
  }
}
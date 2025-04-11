# Slack Forwarder

A simple service that forwards messages to Slack channels.

## Features

- Easy-to-use REST API
- Auto-loading routes based on filename convention
- ES Modules support

## Setup

1. Clone the repository:
   ```
   git clone https://github.com/the-muel-git/slack-forwarder.git
   cd slack-forwarder
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file with your Slack credentials:
   ```
   SLACK_TOKEN=xoxb-your-token-here
   SLACK_CHANNEL=your-channel-id-here
   PORT=3000
   ```

4. Start the server:
   ```
   npm start
   ```

For development with auto-reload:
```
npm run dev
```

## API Endpoints

### Send a message to Slack

```
POST /forward-to-slack
```

Request body:
```json
{
  "text": "Your message to send to Slack"
}
```

Response:
```json
{
  "status": "success",
  "message": "Sent to Slack"
}
```

## License

MIT
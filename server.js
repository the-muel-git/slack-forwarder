import express from 'express';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';

// Get __dirname working in ES module style (Cursor-friendly)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Auto-load all routes in /routes
const routesDir = path.join(__dirname, 'routes');

fs.readdirSync(routesDir).forEach(async (file) => {
  const [method, ...parts] = file.split('.');
  const routePath = '/' + parts.join('/').replace('.js', '');
  const handler = (await import(`./routes/${file}`)).default;
  app[method](routePath, handler);
  console.log(`✅ Loaded route: [${method.toUpperCase()}] ${routePath}`);
});

// Basic health check endpoint
app.get('/', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Server is running' });
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server listening at http://localhost:${port}`);
});
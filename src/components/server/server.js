import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';
import cors from 'cors'; // Import CORS middleware
import { fileURLToPath } from 'url'; // Import fileURLToPath to convert import.meta.url to file path

const __dirname = path.dirname(fileURLToPath(import.meta.url)); // Define __dirname using import.meta.url


const app = express();
const port = 3001;
app.use(cors()); // Enable CORS for all routes

app.use(bodyParser.json({ limit: '50mb' }));
app.use(express.static(path.join(__dirname, 'public'))); // Example of using __dirname in static file serving

app.post('/api/save-frame', (req, res) => {
  const { frame, index } = req.body;
  const base64Data = frame.replace(/^data:image\/png;base64,/, '');
  const filePath = path.join(__dirname, 'frames', `frame_${index}.png`);

  fs.writeFile(filePath, base64Data, 'base64', (err) => {
    if (err) {
      console.log(err);
      return res.status(500).send('Failed to save frame');
    }
    res.status(200).send('Frame saved');
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
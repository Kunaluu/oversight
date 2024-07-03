import fs from 'fs';
import path from 'path';
import { spawn } from 'child_process';
import formidable from 'formidable';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error('Error parsing form data:', err);
        return res.status(500).json({ error: 'Failed to parse form data' });
      }

      // Process the captured frame
      const { frame } = fields;
      const base64Data = frame.replace(/^data:image\/png;base64,/, '');
      const framesDir = './tmp'; // Or another suitable directory in Vercel environment
      const filePath = path.join(framesDir, `frame_${Date.now()}.png`);

      // Save frame to file
      fs.writeFile(filePath, base64Data, 'base64', async (err) => {
        if (err) {
          console.error('Error saving frame:', err);
          return res.status(500).json({ error: 'Failed to save frame' });
        }

        console.log('Frame saved:', filePath);

        // Trigger Python script for face detection
        const pythonScript = path.join(__dirname, 'detect_faces.py');
        const pythonProcess = spawn('python3', [pythonScript]);

        pythonProcess.on('close', (code) => {
          console.log(`Python script exited with code ${code}`);
          res.status(200).json({ message: 'Frame captured and processed' });
        });
      });
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
  import mongoose from 'mongoose';
  import cors from 'cors';
  import express from 'express';

  // Initialize Express app
  const app = express();
  
  // Use CORS middleware
  app.use(cors());

  const MONGODB_URI = 'mongodb+srv://workoversight:Uz1j9xkE9DYZgfrS@formdata.cnqjvxq.mongodb.net/?retryWrites=true&w=majority&appName=Formdata';

  const FormDataSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    submittedAt: { type: Date, default: Date.now }
  });
  
  let FormModel;
  
  async function connectToDatabase() {
    if (FormModel) return;
  
    try {
      await mongoose.connect(MONGODB_URI);
      FormModel = mongoose.model('FormData', FormDataSchema);
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Failed to connect to MongoDB', error);
      throw new Error('Database connection error');
    }
  }
  
  export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { name, email } = req.body;
  
      try {
        await connectToDatabase();
  
        const formData = new FormModel({ name, email });
        await formData.save();
  
        res.status(200).json({ message: 'Form submitted and data saved to MongoDB' });
      } catch (error) {
        console.error('Error saving form data to MongoDB', error);
        res.status(500).json({ message: 'Internal server error' });
      }
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }
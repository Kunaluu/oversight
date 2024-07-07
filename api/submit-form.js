import mongoose from 'mongoose';

// Replace with your MongoDB connection string
const MONGODB_URI = 'mongodb+srv://workoversight:VxyxwowHmMoHCN1i@formdata.cnqjvxq.mongodb.net/?retryWrites=true&w=majority&appName=Formdata';

// Define a Mongoose schema
const FormDataSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now }
});

let FormModel;

async function connectToDatabase() {
  if (FormModel) return;

  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    FormModel = mongoose.model('FormData', FormDataSchema);
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    throw error;
  }
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email } = req.body;

    try {
      await connectToDatabase();

      // Create a new record in MongoDB
      const formData = new FormModel({ name, email });
      await formData.save();

      res.status(200).json({ message: 'Form submitted and data saved to MongoDB' });
    } catch (error) {
      console.error('Error saving form data to MongoDB', error);
      res.status(500).json({ message: 'Error submitting form data' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
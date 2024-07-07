export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { name, email } = req.body;
  
      // You can store the data in a database or any storage service
      // For simplicity, we'll just log it here
      console.log('Name:', name);
      console.log('Email:', email);
  
      res.status(200).json({ message: 'Form submitted successfully' });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }
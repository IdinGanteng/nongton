const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const port = 5000;

// Enable CORS for cross-origin requests
app.use(cors());
app.use(express.json());

// Replace these with your email credentials and configuration
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'maukif99@gmail.com',
    pass: 'paninggaran',
  },
});

app.post('https://real-blue-blackbuck-garb.cyclic.app/user', async (req, res) => {
  const { email, message } = req.body;

  try {
    // Send the email
    await transporter.sendMail({
      from: 'maukif99@gmail.com',
      to: 'kanggayus101@gmail.com', // Replace this with the recipient's email address
      subject: 'New Message from Contact Form',
      text: `${email} sent the following message: ${message}`,
    });

    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send message.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

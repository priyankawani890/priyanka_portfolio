const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Please fill all required fields.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Use Gmail or any SMTP service
      auth: {
        user: 'your-email@gmail.com', // replace with your email
        pass: 'your-app-password'     // generate Gmail App Password if 2FA enabled
      }
    });

    await transporter.sendMail({
      from: email,
      to: 'priyankawani890@gmail.com', // where you want to receive messages
      subject: subject || `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    });

    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to send message', error: err.message });
  }
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));

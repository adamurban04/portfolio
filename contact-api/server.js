const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const Message = require('./models/Message');

const app = express();
const PORT = process.env.PORT || 10000;

// Middleware
app.use(cors({
  origin: 'https://adamurban04.github.io' // Or '*' if you’re testing locally
}));
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  dbName: 'website', // 👈 This is the key!
  serverSelectionTimeoutMS: 5000
})

.then(() => {
  console.log('✅ MongoDB connection established');

  mongoose.connection.db.listCollections({ name: 'messages' }).toArray((err, collections) => {
    if (err) {
      console.error('❌ Error checking collections:', err);
      return;
    }

    if (collections.length) {
      console.log('✅ "messages" collection verified');
    } else {
      console.log('ℹ️ "messages" collection does not exist - it will be created on first insert');
    }
  });
})
.catch(err => {
  console.error('❌ MongoDB connection error:', err);
  process.exit(1);
});

// to handle POST requests to save messages
// This endpoint will save the name and message to the MongoDB database
app.post('/api/messages', async (req, res) => {
  try {
    console.log('📥 New POST request received with body:', req.body);

    const { name, message } = req.body;
    if (!name || !message) {
      console.log("⚠️ Missing fields in request body");
    return res.status(400).json({ success: false, error: 'Name and message are required.' });
  }
 

    const newMessage = new Message({ name, message });
    await newMessage.save();

    console.log('✅ Message saved to database');
    res.status(201).json({ success: true, message: 'Message saved successfully.' });
  } catch (error) {
    console.error('❌ Error saving message:', error);
    res.status(500).json({ success: false, message: 'Server error.' });
  }
});

// to test the API
app.get('/api/ping', (req, res) => {
  console.log('GET /api/ping received');
  res.send('pong');
}); 

// to keep the server alive
app.get('/healtz', (req, res) => {
  res.status(200).send('OK');
});


// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

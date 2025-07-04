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

// Routes
app.post('/api/messages', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    res.status(201).json({ success: true, message: 'Message saved successfully.' });
  } catch (error) {
    console.error('❌ Error saving message:', error);
    res.status(500).json({ success: false, message: 'Server error.' });
  }
});

// Default route
app.get('/', (req, res) => {
  res.send('🌐 Portfolio backend is running!');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

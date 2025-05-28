//Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/comments', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
// Define a schema for comments
const commentSchema = new mongoose.Schema({
  name: String,
  email: String,
  comment: String,
  date: { type: Date, default: Date.now }
});
// Create a model for comments
const Comment = mongoose.model('Comment', commentSchema);
// Middleware
app.use(cors());
app.use(bodyParser.json());
// Routes
app.get('/comments', async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
);



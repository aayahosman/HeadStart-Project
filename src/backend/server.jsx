// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth.jsx');
const financialDataRoutes = require('./routes/financialData.jsx');

dotenv.config();

const app = express();
app.use(express.json()); // to parse JSON bodies

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000 // Increase timeout to 30 seconds
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.log('MongoDB connection error:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/financial-data', financialDataRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

process.on('SIGINT', () => {
  console.log('Server is shutting down...');
  app.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});
console.log('Mongo URI:', process.env.MONGO_URI);  

app.post('/test', (req, res) => {
  console.log(req.body); // Log the request body
  res.json({ message: 'Test route hit successfully!' });
});

const cors = require('cors');
app.use(cors());  // Enable all origins by default

// If you want to restrict it to specific origins, use:
app.use(cors({
  origin: 'http://localhost:3000',  // React app running on port 3000
}));

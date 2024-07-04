import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes.js';
import authRoutes from './routes/auth.route.js';
import postRoutes from './routes/post.route.js';
import cookieParser from 'cookie-parser';
dotenv.config();
// 
mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log("Connected To MongoDB successfully");
  })
  .catch((error) => {
    console.error("Error Connecting to MongoDB:", error);
  });

const app = express();
app.use(cookieParser());
app.use(express.json());
const PORT = 3000;

app.use('/api/user', userRoutes);
app.use('/api/auth',authRoutes);
app.use('/api/post',postRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});




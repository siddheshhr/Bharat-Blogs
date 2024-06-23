import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes.js';
import authRoutes from './routes/auth.route.js';
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
app.use(express.json());
const PORT = 3000;

app.use('/api/user', userRoutes);
app.use('/api/auth',authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



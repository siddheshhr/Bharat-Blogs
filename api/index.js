import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

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
const PORT = 3000;


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

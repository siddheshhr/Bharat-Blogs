import express from 'express';
import test from '../controllers/user.controller.js'
const router = express.Router();
const app=express();

router.get('/test',test);

export default router;

import express, { Router, Request, Response } from 'express';
import { AdminController } from '../controllers/AdminController';

const router: Router = express.Router();

// Login route
router.post('/login', AdminController.login);

export default router;
import { Request, Response, NextFunction } from 'express';
import { decipher } from '../utils/encryptStr';
import Admin, { AdminDocument } from '../models/Admin';

interface AuthenticatedRequest extends Request {
  admin?: AdminDocument;
}

export const authenticateAdmin = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const { username, password } = req.body;

  try {
    const admin = await Admin.findOne({ username });

    if (!admin) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const decryptedPassword = decipher('SECRET')(admin.password);
    if (password !== decryptedPassword) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    req.admin = admin;

    next();
  } catch (error) {
    console.error('Authentication error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
  
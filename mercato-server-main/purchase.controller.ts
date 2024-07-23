// src/controllers/purchase.controller.ts

import express, { Request, Response } from 'express';
import { PurchaseService } from '../services/purchase.service';
import { FetchPurchaseHistoryDto } from '../dtos/fetchPurchaseHistory.dto';

const router = express.Router();

router.post('/history', async (req: Request, res: Response) => {
  try {
    const dto: FetchPurchaseHistoryDto = req.body;
    const history = await PurchaseService.getPurchaseHistory(dto);
    res.json(history);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

export default router;

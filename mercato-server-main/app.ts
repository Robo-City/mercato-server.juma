// src/app.ts

import express from 'express';
import bodyParser from 'body-parser';
import purchaseController from './controllers/purchase.controller';

const app = express();

app.use(bodyParser.json());
app.use('/api/purchases', purchaseController);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

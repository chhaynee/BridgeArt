import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'NFTs endpoint' });
});

export default router; 
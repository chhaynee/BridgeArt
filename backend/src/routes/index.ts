import { Router } from 'express';
import userRoutes from './user.routes';
import nftRoutes from './nft.routes';

const router = Router();

router.use('/users', userRoutes);
router.use('/nfts', nftRoutes);

export default router; 
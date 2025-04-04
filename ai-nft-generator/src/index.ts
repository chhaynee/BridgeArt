import express from 'express';
import { generateRoutes } from './routes';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/generate', generateRoutes);

app.listen(PORT, () => {
  console.log(`AI NFT Generator running on port ${PORT}`);
}); 
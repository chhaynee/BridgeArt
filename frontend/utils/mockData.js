export const mockNFTs = [
  {
    id: 1,
    name: 'Cosmic Dreamer #1',
    image: 'https://picsum.photos/400/400?random=1',
    price: '0.5 ETH',
    chain: 'Ethereum',
    creator: '0x1234...5678',
    createdAt: '2024-03-15',
  },
  {
    id: 2,
    name: 'Digital Landscape #42',
    image: 'https://picsum.photos/400/400?random=2',
    price: '120 MATIC',
    chain: 'Polygon',
    creator: '0x8765...4321',
    createdAt: '2024-03-14',
  },
  {
    id: 3,
    name: 'Ordinal Inscription #123',
    image: 'https://picsum.photos/400/400?random=3',
    price: '0.002 BTC',
    chain: 'Bitcoin',
    creator: 'bc1q...xyz',
    createdAt: '2024-03-13',
  },
  {
    id: 4,
    name: 'Abstract Harmony #7',
    image: 'https://picsum.photos/400/400?random=4',
    price: '1.2 SOL',
    chain: 'Solana',
    creator: '7xKX...9pLm',
    createdAt: '2024-03-12',
  },
];

export const mockChains = [
  { id: 'ethereum', name: 'Ethereum', icon: '🔷' },
  { id: 'polygon', name: 'Polygon', icon: '💜' },
  { id: 'bsc', name: 'BSC', icon: '💛' },
  { id: 'bitcoin', name: 'Bitcoin Ordinals', icon: '🟡' },
  { id: 'solana', name: 'Solana', icon: '🟣' },
];

export const generateMockNFT = (prompt) => {
  return {
    id: Math.floor(Math.random() * 1000),
    name: `AI Generated #${Math.floor(Math.random() * 1000)}`,
    image: `https://picsum.photos/400/400?random=${Math.random()}`,
    price: `${(Math.random() * 2).toFixed(2)} ETH`,
    chain: 'Ethereum',
    creator: '0x' + Math.random().toString(16).slice(2, 6) + '...' + Math.random().toString(16).slice(2, 6),
    createdAt: new Date().toISOString().split('T')[0],
    prompt: prompt,
  };
}; 
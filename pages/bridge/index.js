import { useState } from 'react';
import Layout from '../../components/Layout';
import { ArrowsRightLeftIcon } from '@heroicons/react/24/outline';

const chains = [
  { id: 'ethereum', name: 'Ethereum', icon: '🔷' },
  { id: 'polygon', name: 'Polygon', icon: '💜' },
  { id: 'bsc', name: 'BSC', icon: '💛' },
  { id: 'bitcoin', name: 'Bitcoin Ordinals', icon: '🟡' },
];

export default function Bridge() {
  const [sourceChain, setSourceChain] = useState('');
  const [targetChain, setTargetChain] = useState('');
  const [nftAddress, setNftAddress] = useState('');
  const [tokenId, setTokenId] = useState('');
  const [isBridging, setIsBridging] = useState(false);

  const handleBridge = async (e) => {
    e.preventDefault();
    setIsBridging(true);
    
    try {
      // TODO: Integrate with bridge service
      const response = await fetch('/api/bridge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sourceChain,
          targetChain,
          nftAddress,
          tokenId,
        }),
      });
      
      const data = await response.json();
      console.log('Bridge transaction:', data);
    } catch (error) {
      console.error('Error bridging NFT:', error);
    } finally {
      setIsBridging(false);
    }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            Bridge NFTs
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-300 sm:mt-4">
            Transfer your NFTs between different blockchains
          </p>
        </div>

        <div className="mt-12 max-w-lg mx-auto">
          <form onSubmit={handleBridge} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="sourceChain" className="block text-sm font-medium text-foreground">
                  From Chain
                </label>
                <select
                  id="sourceChain"
                  name="sourceChain"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-700 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md bg-background text-foreground"
                  value={sourceChain}
                  onChange={(e) => setSourceChain(e.target.value)}
                >
                  <option value="">Select chain</option>
                  {chains.map((chain) => (
                    <option key={chain.id} value={chain.id}>
                      {chain.icon} {chain.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="targetChain" className="block text-sm font-medium text-foreground">
                  To Chain
                </label>
                <select
                  id="targetChain"
                  name="targetChain"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-700 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md bg-background text-foreground"
                  value={targetChain}
                  onChange={(e) => setTargetChain(e.target.value)}
                >
                  <option value="">Select chain</option>
                  {chains.map((chain) => (
                    <option key={chain.id} value={chain.id}>
                      {chain.icon} {chain.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="nftAddress" className="block text-sm font-medium text-foreground">
                NFT Contract Address
              </label>
              <input
                type="text"
                name="nftAddress"
                id="nftAddress"
                className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-700 rounded-md bg-background text-foreground"
                placeholder="0x..."
                value={nftAddress}
                onChange={(e) => setNftAddress(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="tokenId" className="block text-sm font-medium text-foreground">
                Token ID
              </label>
              <input
                type="text"
                name="tokenId"
                id="tokenId"
                className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-700 rounded-md bg-background text-foreground"
                placeholder="Token ID"
                value={tokenId}
                onChange={(e) => setTokenId(e.target.value)}
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={isBridging || !sourceChain || !targetChain || !nftAddress || !tokenId}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50"
              >
                {isBridging ? (
                  <ArrowsRightLeftIcon className="animate-spin h-5 w-5" />
                ) : (
                  'Bridge NFT'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
} 
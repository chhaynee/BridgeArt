import { useState } from 'react';
import Layout from '../../components/Layout';
import { mockNFTs, mockChains } from '../../utils/mockData';

export default function Marketplace() {
  const [selectedChain, setSelectedChain] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNFTs = mockNFTs.filter((nft) => {
    const matchesChain = selectedChain === 'all' || nft.chain === selectedChain;
    const matchesSearch = nft.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesChain && matchesSearch;
  });

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            NFT Marketplace
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-300 sm:mt-4">
            Browse and trade NFTs across multiple blockchains
          </p>
        </div>

        <div className="mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="w-full sm:w-64">
              <select
                value={selectedChain}
                onChange={(e) => setSelectedChain(e.target.value)}
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-700 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md bg-background text-foreground"
              >
                <option value="all">All Chains</option>
                {mockChains.map((chain) => (
                  <option key={chain.id} value={chain.name}>
                    {chain.icon} {chain.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-full sm:w-64">
              <input
                type="text"
                placeholder="Search NFTs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-700 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md bg-background text-foreground"
              />
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredNFTs.map((nft) => (
              <div
                key={nft.id}
                className="bg-background border border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={nft.image}
                    alt={nft.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-foreground">{nft.name}</h3>
                  <p className="mt-1 text-sm text-gray-300">{nft.chain}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-primary font-medium">{nft.price}</span>
                    <button className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
} 
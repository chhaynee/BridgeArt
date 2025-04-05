import { Connection, clusterApiUrl } from '@solana/web3.js';
import { Metaplex } from '@metaplex-foundation/js';
import { useWallet } from '@solana/wallet-adapter-react';

const connection = new Connection(clusterApiUrl('mainnet-beta'));
const metaplex = new Metaplex(connection);

export const mintNFT = async (metadata) => {
  try {
    const { wallet } = useWallet();
    
    if (!wallet.connected) {
      throw new Error('Wallet not connected');
    }

    // Create NFT metadata
    const nftData = {
      name: metadata.name,
      symbol: 'BRIDGE',
      description: metadata.description,
      sellerFeeBasisPoints: 500, // 5% royalty
      image: metadata.imageUrl,
      attributes: [
        {
          trait_type: 'Prompt',
          value: metadata.prompt
        },
        {
          trait_type: 'Generator',
          value: 'Stable Diffusion'
        }
      ]
    };

    // Mint NFT using Metaplex
    const { nft } = await metaplex
      .nfts()
      .create({
        uri: metadata.ipfsHash,
        name: nftData.name,
        symbol: nftData.symbol,
        sellerFeeBasisPoints: nftData.sellerFeeBasisPoints,
        isMutable: true,
      });

    return {
      mintAddress: nft.address.toString(),
      metadata: nftData
    };
  } catch (error) {
    console.error('Error minting NFT:', error);
    throw error;
  }
}; 
import { useState } from 'react';
import Layout from '../../components/Layout';
import { SparklesIcon } from '@heroicons/react/24/outline';
import { generateMockNFT } from '../../utils/mockData';

export default function CreateNFT() {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState(null);
  const [mintStatus, setMintStatus] = useState(null);

  const handleGenerate = async (e) => {
    e.preventDefault();
    setIsGenerating(true);
    
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Generate mock NFT
      const mockNFT = generateMockNFT(prompt);
      setGeneratedImage(mockNFT.image);

      // Simulate minting
      setMintStatus('minting');
      await new Promise(resolve => setTimeout(resolve, 1500));
      setMintStatus('success');
      
      console.log('Mock NFT generated:', mockNFT);
    } catch (error) {
      console.error('Error:', error);
      setMintStatus('error');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            Create AI-Generated NFT
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-300 sm:mt-4">
            Generate unique NFTs using advanced AI technology
          </p>
        </div>

        <div className="mt-12 max-w-lg mx-auto">
          <form onSubmit={handleGenerate} className="space-y-6">
            <div>
              <label htmlFor="prompt" className="block text-sm font-medium text-foreground">
                Describe your NFT
              </label>
              <div className="mt-1">
                <textarea
                  id="prompt"
                  name="prompt"
                  rows={4}
                  className="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-700 rounded-md bg-background text-foreground"
                  placeholder="A futuristic cityscape with flying cars and neon lights..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isGenerating || !prompt}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50"
              >
                {isGenerating ? (
                  <SparklesIcon className="animate-spin h-5 w-5" />
                ) : (
                  'Generate NFT'
                )}
              </button>
            </div>
          </form>

          {generatedImage && (
            <div className="mt-8">
              <h2 className="text-lg font-medium text-foreground">Generated NFT</h2>
              <div className="mt-4">
                <img
                  src={generatedImage}
                  alt="Generated NFT"
                  className="rounded-lg shadow-lg"
                />
              </div>
              {mintStatus === 'minting' && (
                <p className="mt-2 text-sm text-gray-300">Minting NFT...</p>
              )}
              {mintStatus === 'success' && (
                <p className="mt-2 text-sm text-green-500">NFT minted successfully!</p>
              )}
              {mintStatus === 'error' && (
                <p className="mt-2 text-sm text-red-500">Error minting NFT. Please try again.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
} 
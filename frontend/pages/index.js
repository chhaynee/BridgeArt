import Layout from '../components/Layout';
import { 
  SparklesIcon, 
  ArrowsRightLeftIcon, 
  CubeIcon 
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'AI-Powered Creation',
    description: 'Generate unique NFTs using advanced AI technology',
    icon: SparklesIcon,
  },
  {
    name: 'Multi-Chain Bridge',
    description: 'Seamlessly bridge NFTs across different blockchains',
    icon: ArrowsRightLeftIcon,
  },
  {
    name: 'Bitcoin Ordinals',
    description: 'Create and trade NFTs on Bitcoin using Ordinals',
    icon: CubeIcon,
  },
];

export default function Home() {
  return (
    <Layout>
      <div className="relative">
        {/* Hero section */}
        <div className="text-center py-16 sm:py-24">
          <h1 className="text-4xl font-extrabold text-foreground sm:text-5xl md:text-6xl">
            <span className="block">Welcome to</span>
            <span className="block text-primary">BridgeArt</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            The next-generation NFT platform combining AI, multi-chain bridging, and Bitcoin Ordinals.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a
                href="/create"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark md:py-4 md:text-lg md:px-10"
              >
                Create NFT
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href="/marketplace"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
              >
                Explore Marketplace
              </a>
            </div>
          </div>
        </div>

        {/* Feature section */}
        <div className="py-12 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Features</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-foreground sm:text-4xl">
                Everything you need to create and trade NFTs
              </p>
            </div>

            <div className="mt-10">
              <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                {features.map((feature) => (
                  <div key={feature.name} className="relative">
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-foreground">{feature.name}</p>
                    <p className="mt-2 ml-16 text-base text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 
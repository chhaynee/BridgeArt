import '../styles/globals.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { WagmiConfig, createConfig, configureChains } from 'wagmi';
import { mainnet, polygon, bsc } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { RainbowKitProvider, getDefaultWallets } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, polygon, bsc],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'BridgeArt',
  projectId: 'YOUR_PROJECT_ID', // Get this from WalletConnect
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp; 
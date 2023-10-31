'use client'
import "bootstrap/dist/css/bootstrap.min.css"
import './globals.css'
import ImportBootstrap from "@/src/components/ImportBootstrap"
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { sepolia, mainnet } from "wagmi";
import { publicProvider } from "wagmi/providers/public"
import { infuraProvider } from 'wagmi/providers/infura'
import '@/public/fonts/fontstyle.css'

const infuraId = process.env.NEXT_PUBLIC_INFURA_ID

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, sepolia],
  [infuraProvider({infuraId}), publicProvider()]
)

const { connectors } = getDefaultWallets({
  appName: 'Tequilaverse',
  projectId: 'TQV01',
  chains,
})

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient
})  

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <>
          <WagmiConfig config={wagmiConfig} >
            <RainbowKitProvider chains={chains}>
              <ImportBootstrap />
                {children}
            </RainbowKitProvider>
          </WagmiConfig>
        </>
      </body>
    </html>
  )
}
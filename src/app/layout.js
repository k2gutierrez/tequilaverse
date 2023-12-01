'use client'
import { useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
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

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        
      </head>
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

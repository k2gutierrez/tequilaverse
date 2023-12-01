/** @type {import('next').NextConfig} 
const nextConfig = {
    images: {
        unoptimized: true,
      },
}

module.exports = nextConfig
*/

const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  /*reactStrictMode: true,*/
  assetPrefix: isProd ? 'https://tequilaverse.io/' : undefined,
  output: 'export',
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true
}

module.exports = nextConfig
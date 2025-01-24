/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['fakestoreapi.com','picsum.photos'],
  },
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'fakestoreapi.com',
      port: '',
      pathname: '/img/**',
    },
  ],
};


export default nextConfig;

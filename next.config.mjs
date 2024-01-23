/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_ADDRESS: "http://localhost:3000/api"
  },
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/about',
        destination: '/',
        permanent: true
      }
    ]
  }
};

export default nextConfig;

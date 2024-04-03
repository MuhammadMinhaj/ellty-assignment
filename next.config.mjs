/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'build-web',
  compiler: {
    removeConsole: true
  }
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable all image src hostname
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "**",
          },
        ],
      },
};

export default nextConfig;

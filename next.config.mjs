/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/videos/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
  images: {
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'motionsites.ai',
      },
      {
        protocol: 'https',
        hostname: 'images.higgs.ai',
      },
      {
        protocol: 'https',
        hostname: 'd8j0ntlcm91z4.cloudfront.net',
      },
      {
        protocol: 'https',
        hostname: 'shrug-person-78902957.figma.site',
      },
    ],
  },
};

export default nextConfig;

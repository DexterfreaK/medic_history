/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "www.myopd.in", "png.pngtree.com"],
    routes: [
      {
        src: "/(.*)",
        headers: {
          "x-forwarded-proto": "https",
        },
        methods: ["GET", "HEAD", "POST", "PUT", "DELETE", "OPTIONS"],
      },
    ],
  },
};

module.exports = nextConfig;

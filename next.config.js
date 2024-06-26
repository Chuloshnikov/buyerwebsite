/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "i.ibb.co", 
    "images.pexels.com", 
    "lh3.googleusercontent.com", 
    'images.unsplash.com',
    'buyer-anastasiia.s3.amazonaws.com',
    "res.cloudinary.com"],
  },
  typescript: {
    ignoreBuildErrors: true,
  }
}

module.exports = nextConfig

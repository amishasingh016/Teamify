/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
            bodySizeLimit: '20mb' // Set desired value here
        }
    },
    images: {
        domains: ['images.unsplash.com', 'res.cloudinary.com']
    }
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
 images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'imdb-sepia-ten.vercel.app',
             pathname:'image.tmdb.org'

            }
        ]
    }
  
};

export default nextConfig;

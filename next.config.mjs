/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["https://static.hdrezka.ac/"],
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "static.hdrezka.ac",
                port: "",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;

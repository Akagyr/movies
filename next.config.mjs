/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["https://static.hdrezka.ac/"],
        domains: ["https://lh3.googleusercontent.com/"],
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "static.hdrezka.ac",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com",
                port: "",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;

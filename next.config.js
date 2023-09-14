/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    trailingSlash: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "admin.vikashkumarpal.com",
                // pathname: "/*",
            },
            {
                protocol: "https",
                hostname: "secure.gravatar.com",
                // pathname: "/*",
            },
        ],
    },
    webpack: (
        config,
        {buildId, dev, isServer, defaultLoaders, nextRuntime, webpack}
    ) => {
        // Important: return the modified config
        return config
    },
}

module.exports = nextConfig
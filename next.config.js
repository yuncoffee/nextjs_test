/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY

const nextConfig = {
    reactStrictMode: true,

    // URL이 바뀜
    async redirects() {
        return [
            {
                // 이걸가면
                source: "/contact",
                // 여기로 보내줘
                destination: "https://www.naver.com",
                permanent: false,
            },
        ]
    },
    // URL이 안바뀜
    async rewrites() {
        return [
            {
                source: "/api/movies",
                destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
            },
            {
                source: "/api/movies/:id",
                destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
            },
        ]
    },
}

module.exports = nextConfig

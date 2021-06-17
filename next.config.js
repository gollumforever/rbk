module.exports = {
    webpack: function (config) {
        config.module.rules.push({
            test: /\.md$/,
            use: 'raw-loader',
        })
        return config
    },
    async redirects() {
        return [
            {
                source: '/(.*)',
                has: [
                    {
                        type: 'host',
                        value: 'www.twitter.rizbizkits.com',
                    },
                ],
                permanent: false,
                destination: 'https://www.twitter.com/rizbizkits',
            },
        ]
    }
}
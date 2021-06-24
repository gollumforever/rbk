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
            {
                source: '/feeling-22',
                destination: 'https://v1.rizwanakhan.com/feeling-22',
                permanent: false
            },
            {
                source: '/beyond-them-20s',
                destination: 'https://v1.rizwanakhan.com/beyond-them-20s',
                permanent: false
            }
        ]
    }
}
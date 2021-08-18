module.exports = {
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
  async redirects() {
    return [
      {
        source: "/(.*)",
        has: [
          {
            type: "host",
            value: "www.memes.rizwanakhan.com",
          },
        ],
        permanent: false,
        destination: "https://www.rizwanakhan.com/memes",
      },
      {
        source: "/feeling-22",
        destination: "https://v1.rizwanakhan.com/feeling-22",
        permanent: false,
      },
      {
        source: "/beyond-them-20s",
        destination: "https://v1.rizwanakhan.com/beyond-them-20s",
        permanent: false,
      },
    ];
  },
};

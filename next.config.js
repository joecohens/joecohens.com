module.exports = {
  async rewrites() {
    return [
      {
        source: "/i/:path*",
        destination: "https://i.joecohens.com/:path*",
      },
    ];
  },
};

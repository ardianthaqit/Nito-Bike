module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: ["./shopify/**/*.liquid"],
  },
	theme: {
    maxWidth: {
      '1/2': '60%',
    },
  }
};
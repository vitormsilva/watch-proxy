module.exports = {
  entry: "./index.js",
  output: {
    path: "./browser",
    library: "WatchProxy",
    filename: "WatchProxy.js",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        use: [
          { loader: "babel-loader" }
        ]
      }
    ]
  }
};

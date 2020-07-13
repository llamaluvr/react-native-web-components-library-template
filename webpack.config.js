const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./src/index.js",
  externals: [nodeExternals()],
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    library: "",
    libraryTarget: "commonjs",
  },
  resolve: {
    alias: {
      "react-native$": "react-native-web",
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
						presets: ["@babel/react"],
						plugins: [
							[
								require.resolve('babel-plugin-module-resolver'),
								{
									"root": ["./src"],
									alias: {
										"^react-native$": "react-native-web",
									},
								},
							],
						],
          },
        },
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "./src"),
      },
    ],
  },
};

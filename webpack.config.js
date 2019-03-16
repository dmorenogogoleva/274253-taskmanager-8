const path = require(`path`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`);

module.exports = {
  entry: `./src/main.js`,
  output: {
    path: path.resolve(__dirname, `public`),
    filename: `bundle.js`
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: `babel-loader`,
    },
    {
      test: /\.css$/,
      use: [
        {loader: `style-loader`},
        {loader: `css-loader`},
      ],
    },
    {
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      loader: `url-loader?limit=100000`
    },
    ]},
  plugins: [
    new HtmlWebpackPlugin({
      template: `./src/index.html`,
    })
  ],
  devtool: `source-map`,
  devServer: {
    contentBase: path.join(__dirname, `public`),
    publicPath: `http:/localhost:8080/`,
    compress: true,
    watchContentBase: true
  },
};

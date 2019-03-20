const path = require(`path`);

module.exports = {
  mode: `development`,
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
  devtool: `source-map`,
  devServer: {
    contentBase: path.join(__dirname, `public`),
    compress: true,
    host: `localhost`,
  },
};

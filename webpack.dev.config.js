const path = require('path');


module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    // contentBase: path.resolve(__dirname, './dist'),
    open: true,
    host: "localhost",
    // static: {
    //   directory: path.join(__dirname, 'public'),
    // },
    // compress: true,
    // port: 9000,
  }
};

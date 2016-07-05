var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var UglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}});
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
var fs = require('fs');
var srcDir = './src/develop';

function getEntry() {
  var jsPath = path.join(__dirname, srcDir);
  var dirs = fs.readdirSync(jsPath);
  var matchs = [],
    files = {};
  dirs.forEach(function(item) {
    matchs = item.match(/(.+)\.js$/);
    if (matchs) {
      files[matchs[1]] = path.resolve(srcDir, item);
    }
  });
  return files;
}

module.exports = {
  //devtool: 'false',
  devtool: 'source-map',
  entry: getEntry(),
  output: {
    path: path.join(__dirname, './src/build'), //文件输出目录
    filename: '[name].js',
    publicPath: path.join(__dirname, './src/build/')
  },
  module: {
    loaders:
    	[
        {test: /\.css$/, loader: "style!css" },
        { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
        // { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
        {test: require.resolve("jquery"),loader: "expose?jQuery"},
	      {test: require.resolve("jquery"),loader: "expose?$"},
    		{test: /\.vue$/,loader: 'vue'},
    		{test: /.js$/,exclude: /(node_modules|bower_components)/,loader: 'babel',query: {presets: ['es2015']}},
    	]
    },
    resolve: {
      extensions: ['', '.js', '.css'],
      alias: {
        routers:path.join(__dirname, './src/model/routers.js'),
        // weui:path.join(__dirname, 'public/script/frame/weui/jquery-weui.js'),
      }
    },
    plugins: [commonsPlugin,UglifyJsPlugin,new ExtractTextPlugin("styles.css")]
}

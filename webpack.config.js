const path = require('path');
const uglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const dev = process.env.NODE_ENV === 'dev';

let cssLoaders = [
  { loader: 'css-loader',
    options: { importLoaders: 1, minimize: !dev }
  }
];

// postcss-loader :
if (!dev) {
  cssLoaders.push({
    loader: 'postcss-loader',
    options: {
      plugins: (loader) => [
        require('postcss-import')({ root: loader.resourcePath }),
        require('postcss-cssnext')(),
        require('autoprefixer')({
          browsers: ['last 2 versions', 'ie > 8']
        })
      ]
    }
  })
}


const config = {
  entry: {app: "./app/index.js"},
  watch: dev,

  output: {
    path: path.resolve(__dirname, "dist"),
    // the target directory for all output files - must be an absolute path (use the Node.js path module)

    filename: "[name].js",
    // the filename template for entry chunks

    publicPath: "/dist/",
    // the url to the output directory resolved relative to the HTML page
  },

  module: {
    rules: [
      // JS
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          // options are usualy in .babelrc :
          /*
          options: {
            presets: ['env']
          }
          */
        }
      },

      // JSX
      {
        test: /\.jsx?$/,
        include: [path.resolve(__dirname, "app")],
        exclude: [path.resolve(__dirname, "app/demo-files")],
        loader: "babel-loader"
      },

      // CSS + postCss + extract-text
      {
        test: /\.css?$/,
        use: ExtractTextPlugin.extract({fallback: "style-loader", use: cssLoaders})
      },

      // SCSS + postCss + extract-text
      {
        test: /\.scss?$/,
        use: ExtractTextPlugin.extract({fallback: "style-loader", use: [...cssLoaders, 'sass-loader']})
        // use: [...cssLoaders, 'sass-loader'] // Without ExtractTextPlugin
      }
    ],
  },

  resolve: {
    extensions: [".js", ".json", ".jsx", ".css"],
    // Used for hidden the extensions at moment of import
  },

  devtool: dev ? "cheap-module-eval-source-map" : false,

  plugins: [
    // for create a css files:
    new ExtractTextPlugin({filename: '[name].css', disable: dev}),
  ],
};


if (!dev) {
  // Minify JS :
  config.plugins.push(new uglifyJsPlugin({
    sourceMap: false
  }))
}


module.exports = config;
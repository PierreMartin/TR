const path = require('path');
const uglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
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
  entry: {
    app: ['./app/css/main.scss', './app/index.jsx']
  },
  watch: dev,

  output: {
    path: path.resolve(__dirname, "public/assets"),
    // the target directory for all output files - must be an absolute path (use the Node.js path module)

    filename: dev ? "[name].js" : "[name].[chunkhash:8].js",
    // the filename template for entry chunks

    publicPath: "/assets/",
    // the url to the output directory resolved relative to the HTML page
  },

  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 3000
  },

  module: {
    rules: [
      // JS
			{
				test: /\.(js|jsx)$/,
				enforce: "pre",
				exclude: /(node_modules|bower_components)/,
				loader: "eslint-loader",
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				loader: "babel-loader",
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
      },

      // fonts :
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'file-loader',
      },

      // Images :
      {
				test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            // image loader :
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[name].[hash:7].[ext]'
            }
          }
        ]
      }
    ],
  },

  resolve: {
    extensions: [".js", ".json", ".jsx", ".css"],
    // Used for hidden the extensions at moment of import

    alias: {
      '@css': path.resolve('./app/css/'),
      '@image': path.resolve('./app/images/'),
      // ...
    }
  },

  // source-map :
  devtool: dev ? "cheap-module-eval-source-map" : false,

  plugins: [
    // for create a css files:
    new ExtractTextPlugin({filename: dev ? '[name].css' : '[name].[contenthash:8].css', disable: dev})
  ],
};


if (!dev) {
  // Minify JS :
  config.plugins.push(new uglifyJsPlugin({sourceMap: false}));

  // Used for the hash name's files :
  config.plugins.push(new ManifestPlugin());

  // Used for the unusable files in the folder's build :
  config.plugins.push(new CleanWebpackPlugin(['assets'], {
    root: path.resolve(__dirname, './public'),
    verbose: true,
    dry: false
  }));
}


module.exports = config;

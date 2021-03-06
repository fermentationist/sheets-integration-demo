const path = require ("path");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    devtool: "source-map", // any "source-map"-like devtool is possible
    resolve: {
        // see below for an explanation
        alias: {
          svelte: path.resolve('node_modules', 'svelte')
        },
        extensions: ['.mjs', '.js', '.svelte'],
        mainFields: ['svelte', 'browser', 'module', 'main']
      },
    module: {
      rules: [
        {
          test: /\.(html|svelte)$/,
          exclude: /node_modules/,
          use: {
            loader: 'svelte-loader',
            options: {
              emitCss: true,
            },
          },
        },

        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [MiniCSSExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts/'
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new MiniCSSExtractPlugin(),
      new HtmlWebpackPlugin({
        template: "./src/template.ejs",
        inject: true,
      })

    ],
    entry: "./src/index.js",
    output: {
        // filename: "app.js",
        path: path.resolve(__dirname, "dist")
    },
    mode: "development",
    devServer: {
        // publicPath: path.join(__dirname, 'public'),
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        liveReload: true,
        proxy: {
          '/api': 'http://localhost:3000'
        }
    }
}
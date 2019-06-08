const path = require('path');

const config = {
    resolve: {
        extensions: ['*', '.js', '.scss', '.jsx', '.json']
    },
    entry: path.resolve(__dirname, 'src/index'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build/'
    },
    module: {
        rules: [
            {
                test: /.j(s|sx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }, {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize: true
                        }
                    }
                ]
            }, {
                test: /\.scss$/,
                loader: 'style!css!resolve-url!sass?sourceMap'
              },
              {
                test: /\.css$/,
                loader: "style-loader!css-loader"
              }, {
                test: /.*\.(gif|png|jpe?g|svg)$/i,
                use: [
                    {
                        loader: 'file-loader?hash=sha512&digest=hex&name=images/[name].[hash].[ext]'
                    }, {
                        loader: 'image-webpack-loader',
                        options: {
                            query: {
                                mozjpeg: {
                                    progressive: true
                                },
                                gifsicle: {
                                    interlaced: true
                                },
                                optipng: {
                                    optimizationLevel: 7
                                }
                            }
                        }
                    }
                ]
            }
        ]
    }
}

module.exports = config;

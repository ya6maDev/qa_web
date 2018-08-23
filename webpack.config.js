const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const publidDir = path.join(__dirname, './public');

module.exports = [
    {
        entry: ['./src/index.jsx'],
        output: {
            path: publidDir,
            publicPath: '/',
            filename: 'bundle.js'
        },
        module: {
            loaders: [
                {
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['react', 'es2015']
                    }
                }
            ]
        },
        devtool: 'source-map',
        resolve: {
            extensions: ['.js', '.jsx']
        },
        devServer: {
            hot: true,
            historyApiFallback: true,
            contentBase: publidDir,
            stats: { colors: true }
        }
    },
    {
        entry: {
            style: './stylesheets/index.scss'
        },
        output: {
            path: publidDir,
            publicPath: '/',
            filename: 'bundle.css'
        },
        module: {
            loaders: [
                {
                    test: /\.css$/,
                    loader: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: 'css-loader'
                    })
                },
                {
                    test: /\.scss$/,
                    loader: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: 'css-loader!sass-loader'
                    })
                },
                {
                    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                    loader: 'url-loader?mimetype=image/svg+xml'
                },
                {
                    test: /\.woff(\d+)?(\?v=\d+\.\d+\.\d+)?$/,
                    loader: 'url-loader?mimetype=application/font-woff'
                },
                {
                    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                    loader: 'url-loader?mimetype=application/vnd.ms-fontobject'
                },
                {
                    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                    loader: 'url-loader?mimetype=application/x-font-ttf'
                }
            ]
        },
        plugins: [new ExtractTextPlugin('bundle.css')]
    }
];

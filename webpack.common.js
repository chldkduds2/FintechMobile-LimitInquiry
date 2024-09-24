const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')
const dotenv = require('dotenv')
const Warning = require('postcss/lib/warning')

dotenv.config()

module.exports = {
    entry: {
        main: './src/index.tsx',
        vendor: ['react', 'react-dom'], // 외부 라이브러리 분리
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(png|jpg|gif|mp4|jpeg|ico)$/,
                type: 'asset',
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(), // 이전 번들 파일 삭제
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
        }),
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(process.env),
        }),
    ],
    resolve: {
        extensions: ['.js', '.ts', '.jsx', '.tsx'],
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    output: {
        filename: '[name].[contenthash].js', // 파일 이름에 해시 추가
        path: path.resolve(__dirname, 'dist'),
    },
}

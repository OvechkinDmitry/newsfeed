import path from 'path'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import type {Configuration} from 'webpack'
import webpack from 'webpack'

const config: Configuration = {
    mode: "development",
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    module: {
        rules: [
            {
                //через что пропускаем лоадер
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, 'build'),
        clean: true,
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
        new webpack.ProgressPlugin(),
    ],
}

export default config
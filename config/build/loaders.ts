import type {RuleSetRule} from 'webpack'
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
    const cssLoader = {
                test: /\.s[ac]ss$/i,
                use: [
                    options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                auto:  /\.module\./,
                                localIdentName: options.isDev
                                    ? '[path][name]__[local]--[hash:base64:5]'
                                    : '[hash:base64:8]'
                            },
                        }
                    },
                    "sass-loader",
                ],
    }

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }
    return [
        typescriptLoader,
        cssLoader,
    ]
}
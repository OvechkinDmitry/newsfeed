import {BuildOptions} from "./types/config";
import {Configuration} from "webpack";
import {buildLoaders} from "./loaders";
import {buildResolvers} from "./resolvers";
import {buildPlugins} from "./plugins";
import {buildDevServer} from "./dev-server";

export const buildWebpackConfig= (options: BuildOptions): Configuration => {
   const {mode, paths, isDev} = options
   return {
       mode: mode,
       entry: paths.entry,
       module: {
           rules: buildLoaders(options),
       },
       resolve: buildResolvers(options),
       output: {
           filename: "[name].[contenthash].js",
           path: paths.build,
           clean: true,
       },
       plugins: buildPlugins(options),
       ...(isDev && {
           devtool: 'inline-source-map',
           devServer: buildDevServer(options),
       })
   }
}
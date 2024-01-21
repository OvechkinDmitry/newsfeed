import {BuildOptions} from "./types/config";
import {Configuration} from "webpack";
import {buildLoaders} from "./loaders";
import {buildResolvers} from "./resolvers";
import {buildPlugins} from "./plugins";

export const buildWebpackConfig= (options: BuildOptions): Configuration => {
    const {mode, paths} = options
   return {
       mode: mode,
       entry: paths.entry,
       module: {
           rules: buildLoaders(),
       },
       resolve: buildResolvers(),
       output: {
           filename: "[name].[contenthash].js",
           path: paths.build,
           clean: true,
       },
       plugins: buildPlugins(options),
   }
}
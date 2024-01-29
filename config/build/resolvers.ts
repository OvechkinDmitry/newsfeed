import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

export const buildResolvers = (options: BuildOptions): ResolveOptions => {
  const { paths } = options;
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [paths.srs, 'node_modules'],
    mainFiles: ['index'],
    alias: {},
  };
};

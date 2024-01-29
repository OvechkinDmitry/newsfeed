import type { Configuration } from 'webpack';

export interface BuildPaths {
    entry: string,
    build:string,
    html: string,
    srs: string,
}

export interface BuildEnv {
    mode: Configuration['mode'],
    port: number,
}

export interface BuildOptions {
    mode: Configuration['mode']
    paths: BuildPaths
    isDev: boolean
    port: number
}

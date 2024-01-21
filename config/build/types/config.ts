import type {Configuration} from "webpack";

export interface BuildPaths {
    entry: string,
    build:string,
    html: string,
}

export interface BuildOptions {
    mode: Configuration['mode']
    paths: BuildPaths
    isDev: boolean
}
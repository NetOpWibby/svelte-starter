


//  I M P O R T S

import commonjs from "@rollup/plugin-commonjs";
import html from "rollup-plugin-bundle-html";
import livereload from "rollup-plugin-livereload";
import resolve from "@rollup/plugin-node-resolve";
import serve from "rollup-plugin-serve";
import sucrase from "@rollup/plugin-sucrase";
import svelte from "rollup-plugin-svelte";
import { terser } from "rollup-plugin-terser";

//  U T I L S

import { preprocess } from "./svelte.config.ts";

const folderExport = "./build";
const isDev = process.env.NODE_ENV === "development";
const isProd = process.env.NODE_ENV === "production";
const isTest = process.env.NODE_ENV === "test";
const port = process.env.PORT || 5000;



//  P R O G R A M

const plugins = [
  commonjs({ include: "node_modules/**" }),
  html({
    dest: folderExport,
    filename: "index.html",
    template: "src/template.html"
  }),
  resolve({ browser: true }),
  svelte({
    css: isTest ?
      false :
      css => css.write(`${folderExport}/styles/style-[hash].css`),
    dev: !isDev,
    extensions: [".svelte"],
    preprocess
  }),
  sucrase({
    exclude: ["node_modules/**"],
    transforms: ["typescript"]
  })
];

if (isDev) {
  plugins.push(
    livereload({
      watch: folderExport
    }),
    serve({
      contentBase: [folderExport],
      historyApiFallback: "/index.html",
      open: false,
      openPage: "/index.html",
      port
    })
  );
}

if (isProd)
  plugins.push(terser({ sourcemap: true }));



//  E X P O R T S

export default {
  input: "src/index.ts",
  output: {
    file: `${folderExport}/scripts/main-[hash].js`,
    format: "iife",
    name: "main",
    sourcemap: true
  },
  plugins
};

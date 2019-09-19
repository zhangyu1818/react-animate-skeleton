import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import clear from "rollup-plugin-clear";

export default {
  input: "src/index.js",
  output: {
    dir: "dist",
    format: "es"
  },
  plugins: [
    clear({
      targets: ["dist"]
    }),
    resolve(),
    babel({
      exclude: "node_modules/**"
    }),
  ],
  external: ["react", "styled-components"]
};

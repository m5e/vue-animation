// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint"
  },
  env: {
    browser: true
  },
  extends: ["plugin:vue/essential", "standard"],
  plugins: ["vue"],
  rules: {
    "generator-star-spacing": "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "semi": ["error", "always"],
    "semi-spacing": ["error", { after: true, before: false }],
    "semi-style": ["error", "last"],
    "no-extra-semi": "error",
    "no-unexpected-multiline": "error",
    "no-unreachable": "error",
    "quotes": ["error", "double"],
    "space-before-function-paren": ["error", "never"],
    "yoda": ["error", "never", { "exceptRange": true }] // リテラル値を変数より先に表示するのを許可
  }
};

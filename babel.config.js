module.exports = {
  plugins: [
    ["module-resolver", {
      "alias": {
        "^react-native$": "react-native-web"
      }
    }],
    '@babel/plugin-proposal-object-rest-spread',
  ],
  presets: [
    '@babel/env',
    'module:metro-react-native-babel-preset',
  ],
};

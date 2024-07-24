module.exports = {
  presets: [
    'module:@react-native/babel-preset',
  ],
  plugins: [
    'react-native-reanimated/plugin',
  ],
    presets: ["module:@react-native/babel-preset"],
    plugins: [
        [
            "module-resolver",
            {
                root: ["./src"],
                extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
                alias: {
                    "@shared/": "./src/shared",
                    "@entities": "./src/entities",
                    "@/": "./src"
                },
            },
        ],
    ],
};

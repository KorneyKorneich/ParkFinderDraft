module.exports = {
    presets: ["module:@react-native/babel-preset"],
    plugins: [
        [
            "module-resolver",
            {
                root: ["./src"],
                extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
                alias: {
                    "@shared": "./src/shared",
                    "@entities": "./src/entities",
                    "@screens": "./src/screens",
                    "@features": "./src/features",
                    "@widgets": "./src/widgets",
                },
            },
        ],
        "react-native-reanimated/plugin",
        [
            "module:react-native-dotenv",
            {
                moduleName: "@env",
                path: ".env",
                blacklist: null,
                whitelist: null,
                safe: false,
                allowUndefined: true,
            },
        ],
    ],
};

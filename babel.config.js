module.exports = {
	presets: ["module:@react-native/babel-preset"],
	plugins: [
		[
			"module-resolver",
			{
				root: ["./src"],
				extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
				alias: {
					"@shared": "./shared",
					"@entities": "./entities",
					"@screens": "./screens",
					// "@/": "./src"
				},
			},
		],
		["react-native-reanimated/plugin",]
	],
};

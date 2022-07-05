module.exports = {
	testEnvironment: "jsdom",
	moduleFileExtensions: ["js", "ts", "tsx"],
	transform: {
		"^.+\\.tsx?$": "ts-jest"
	},
	setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"]
};

module.exports = {
  transform: {
    "^.+\\.(js|jsx|mjs)$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|scss|sass)$": "identity-obj-proxy",
  },
  testEnvironment: "jest-environment-jsdom",
  setupFiles: ["<rootDir>/jest-setup.js"], // Referência absoluta
};
module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
    'vue-uuid': '<rootDir>/__mocks__/uuidMock.js',
  },
  transformIgnorePatterns: [
    'node_modules[/\\\\](?!@amcharts[/\\\\]amcharts4)',
  ],
};

module.exports = {
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['js', 'json', 'vue'],
    transform: {
        '^.+\\.js$': 'babel-jest',
        '^.+\\.vue$': '@vue/vue3-jest'
    },
    verbose: true,
    moduleDirectories: ['node_modules', 'src'],
    modulePaths: ['<rootDir>/src', '<rootDir>/node_modules'],
}
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    rootDir: '../',
    modulePaths: ['<rootDir>/src/'],
    setupFilesAfterEnv: ['<rootDir>/.jest/jest.setup.ts'],
    globals: {
        'ts-jest': {
            tsconfig: '<rootDir>/.jest/tsconfig.json'
        }
    },
    transform: {
        '^.+\\.(ts|tsx)?$': 'ts-jest',
        '^.+\\.[t|j]sx?$': 'babel-jest'
    },
    collectCoverage: true,
    coverageReporters: ['json', 'html'],
    collectCoverageFrom: [
        '<rootDir>/src/components/**/*.{ts,tsx,js,jsx}',
        '!<rootDir>/src/**/*.stories.{ts,tsx,js,jsx}'
    ],
    testMatch: ['**/(*.)+(test).[jt]s?(x)'],
    reporters: [
        'default',
        [
            'jest-html-reporters',
            {
                publicPath: 'report',
                filename: 'report.html',
                expand: true
            }
        ]
    ]
};

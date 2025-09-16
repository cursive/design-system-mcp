module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    moduleNameMapping: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    transform: {
        '^.+\\.(ts|tsx)$': ['babel-jest', {
            presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                '@babel/preset-typescript'
            ]
        }]
    },
    testMatch: [
        '<rootDir>/src/**/__tests__/**/*.(ts|tsx)',
        '<rootDir>/src/**/*.(test|spec).(ts|tsx)'
    ],
    collectCoverageFrom: [
        'src/**/*.(ts|tsx)',
        '!src/**/*.d.ts',
        '!src/**/*.stories.(ts|tsx)',
        '!src/**/index.(ts|tsx)'
    ],
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov', 'html']
};

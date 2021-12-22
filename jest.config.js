module.exports = {
  roots: ['src'],
  moduleDirectories: ['node_modules', '<rootDir>'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.ts'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  moduleNameMapper: {
    '\\.(scss|css|sass)$': 'identity-obj-proxy',
    '^@App/(.*)$': '<rootDir>/src/$1',
    '^lib/(.*)$': '<rootDir>/common/$1',
  },
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.tsx',
    '!src/**/*.spec.tsx',
    '!src/**/_app.tsx',
    '!src/**/_document.tsx',
  ],
  coverageReporters: ['lcov', 'json'],
};

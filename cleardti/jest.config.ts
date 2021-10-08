export default {
roots:['<rootDir>/src'],
collectCoverageFrom:['<rootDir/src/**/*.ts>'],
coverageDiretory:'coverage',
testEvironment:'node',
transform:{
    '.+\\.ts$':'ts-jest'
}

}
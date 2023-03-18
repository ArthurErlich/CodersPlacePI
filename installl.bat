@echo off

REM install typescript
yarn add typescript -D

REM install typescript node module
yarn add ts-node -D

REM install typescript converter
npx tsc --init

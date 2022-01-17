#!/bin/sh

echo "Pre-clean..."
rm -rf ./dist

echo "Transpiling TS to ES6..."
npx tsc -d --outDir types

echo "Transpiling ES6 to ES5..."
npx babel types --out-dir dist

echo "Post-clean..."
rm -rf types/*.js
rm -rf types/**/*.js

echo "ok"

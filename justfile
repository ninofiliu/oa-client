test:
  pnpm exec jest
tdd:
  pnpm exec jest --watch
build:
  rm -rf ./dist
  pnpm exec tsc -d --outDir types
  pnpm exec babel types --out-dir dist
  rm -rf types/*.js
  rm -rf types/**/*.js

typecheck:
  pnpm exec tsc --noEmit
test:
  pnpm exec jest
tdd:
  pnpm exec jest --watch
build:
  rm -rf ./dist
  rm -rf ./types
  pnpm exec tsc -d --outDir types
  pnpm exec babel types --out-dir dist
  rm -rf types/*.js
  rm -rf types/**/*.js
release VERSION: test build
  git add .
  git commit -m build
  pnpm version {{VERSION}}
  pnpm publish

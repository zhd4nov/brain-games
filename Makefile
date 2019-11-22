# Makefile
install: @babel/core @babel/cli @babel/node @babel/preset-env
	npm install

start:
	npx babel-node src/bin/brain-games.js

publish:
	npm publish --dry-run

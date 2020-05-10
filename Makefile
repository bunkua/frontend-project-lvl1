install:
	npm install && make publish && sudo npm link

publish:
	npm publish --dry-run

lint:
	npx eslint .

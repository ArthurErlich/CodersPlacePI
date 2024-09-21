install-dev: ## installls dependencies
	npm -v
	@install-ts
	@isntall-ts-node
	@init-ts
	@clean

install-ts:	
	npm install typescript --save-dev
	npm update typescript

install-ts-node:	
	npm install ts-node --save-dev
	npm update ts-node
	
init-ts:
	npx tsc --init

clean:
	npx tsc --clean
install-dev: ## installls dependencies
	npm -v
	cd ./frontend/code
	@install-ts
	@isntall-ts-node
	@init-ts
	@clean

install-ts:	
	cd ./frontend/code
	npm install typescript --save-dev
	npm update typescript

install-ts-node:
	cd ./frontend/code	
	npm install ts-node --save-dev
	npm update ts-node
	
init-ts:
	cd ./frontend/code
	npx tsc --init

clean:
	cd ./frontend/code
	npx tsc --clean
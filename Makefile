ENV?=development

fetch-env:
	rm -f .env
	cp ./environments/$(ENV).env .env
.PHONY: fetch-env

compile:
	rm -rf ./build
	./node_modules/.bin/tsc
	cp ./environments/${ENV}.env ./build/.env
	cp ./package.json ./build/package.json
	cp ./yarn.lock ./build/yarn.lock
	cp -r ./prisma ./build/prisma
.PHONY: compile

docker-build: compile
	docker build -t jadon-koa-framework -f ./docker/Dockerfile .
.PHONY: docker-build

docker-compose-test-run:
	docker-compose -f docker/docker-compose.test.yml up
.PHONY: docker-compose-test-run

docker-compose-run:
	docker-compose -f docker/docker-compose.yml up
.PHONY: docker-compose-run

docker-compose-stop:
	docker-compose -f docker/docker-compose.yml down
.PHONY: docker-compose-stop

docker-compose-test-stop:
	docker-compose -f docker/docker-compose.test.yml down
.PHONY: docker-compose-test-stop

watch-server: fetch-env
	./node_modules/.bin/nodemon --ignore test/ --watch src -e ts --exec ./node_modules/.bin/ts-node src/server.ts
.PHONY: watch-server

integration-test:
	make fetch-env ENV=test
	./node_modules/.bin/jest --detectOpenHandles
.PHONY: integration-test

prisma-studio: fetch-env
	./node_modules/.bin/prisma studio
.PHONY: prisma-studio

init-db: fetch-env
	./node_modules/.bin/prisma migrate dev
.PHONY: init-db

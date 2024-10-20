.DEFAULT_GOAL := help
.PHONY: help

include .env
export

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

up:
	./vendor/bin/sail up -d --remove-orphans
	make npm-dev

stop:
	./vendor/bin/sail stop

down:
	./vendor/bin/sail down -v

build:
	./vendor/bin/sail build

composer-install:
	./vendor/bin/sail composer install

migrate-seed:
	./vendor/bin/sail artisan migrate:fresh --seed

npm-install:
	./vendor/bin/sail npm install

npm-dev:
	./vendor/bin/sail npm run dev

test:
	./vendor/bin/sail artisan test --coverage-html coverage-report

pint-format:
	./vendor/bin/sail pint

prettier-format:
	prettier --write "**/*.{js,jsx,ts,tsx,css,html}"

pre-commit:
	@echo "Running Prettier..."
	make prettier-format

	@echo "Running Pint..."
	make pint-format

	@echo "Running tests..."
	make test

	@echo "Pre-commit checks complete."

install:
	make down
	make up
	make composer-install
	make npm-install
	make migrate-seed
	make npm-dev

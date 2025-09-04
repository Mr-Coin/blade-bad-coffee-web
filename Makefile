# Makefile for blade-bad-coffee-web

# Default target
.PHONY: help
help:
	@echo "Available commands:"
	@echo "  make start    - Start the development server"
	@echo "  make build    - Build the project for production"
	@echo "  make clean    - Clean build artifacts"
	@echo "  make install  - Install dependencies"
	@echo "  make deploy   - Build to docs/ and push to main for GitHub Pages"

# Check if bun is available, otherwise use npm
BUN_AVAILABLE := $(shell command -v bun 2> /dev/null)
PACKAGE_MANAGER := $(if $(BUN_AVAILABLE),bun,npm)

# Check if node_modules exists
NODE_MODULES_EXISTS := $(shell test -d node_modules && echo "yes" || echo "no")

# Start the development server
.PHONY: start
start:
	@echo "Starting development server with $(PACKAGE_MANAGER)..."
	@if [ "$(NODE_MODULES_EXISTS)" != "yes" ]; then \
		echo "Dependencies not found. Installing first..."; \
		$(PACKAGE_MANAGER) install; \
	fi
	$(PACKAGE_MANAGER) run dev

# Build the project for production
.PHONY: build
build:
	@echo "Building project for production..."
	@if [ "$(NODE_MODULES_EXISTS)" != "yes" ]; then \
		echo "Dependencies not found. Installing first..."; \
		$(PACKAGE_MANAGER) install; \
	fi
	$(PACKAGE_MANAGER) run build

# Clean build artifacts
.PHONY: clean
clean:
	@echo "Cleaning build artifacts..."
	rm -rf dist
	rm -rf node_modules/.vite

# Install dependencies
.PHONY: install
install:
	@echo "Installing dependencies with $(PACKAGE_MANAGER)..."
	$(PACKAGE_MANAGER) install 

# Deploy to GitHub Pages by syncing main, building into docs/, and pushing
.PHONY: deploy
deploy:
	@echo "Syncing with origin/main (rebase, autostash)..."
	@git fetch origin
	@git pull --rebase --autostash origin main || { echo "Rebase failed. Please resolve conflicts and re-run make deploy."; exit 1; }
	@echo "Building project for production..."
	@if [ "$(NODE_MODULES_EXISTS)" != "yes" ]; then \
		echo "Dependencies not found. Installing first..."; \
		$(PACKAGE_MANAGER) install; \
	fi
	$(PACKAGE_MANAGER) run build
	@echo "Preparing GitHub Pages artifacts in docs/ ..."
	@mkdir -p docs
	echo "www.dalethomas.com" > docs/CNAME
	touch docs/.nojekyll
	@if [ -f docs/index.html ]; then cp docs/index.html docs/404.html; fi
	@echo "Staging and pushing docs/ to main..."
	@git add docs vite.config.ts Makefile
	@git diff --cached --quiet || git commit -m "chore: build docs for GitHub Pages and add CNAME/.nojekyll"
	@git push origin main
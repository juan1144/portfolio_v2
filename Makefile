SHELL := /bin/bash
.SHELLFLAGS := -eu -o pipefail -c
MAKEFLAGS += --no-builtin-rules

VENV := .venv
PYTHON := $(VENV)/bin/python

.DEFAULT_GOAL := help

.PHONY: help
help:  ## Show this help
	@grep -Eh '\s##\s' $(MAKEFILE_LIST) | \
	awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

# ------------------:  ## tailwind ------------------------------------------------------
css:  ## Compile Tailwind CSS to base.css
	./tailwindcss -i assets/css/input.css -o assets/css/base.css
watch:  ## Start Tailwind watcher
	./tailwindcss -i assets/css/input.css -o assets/css/base.css --watch

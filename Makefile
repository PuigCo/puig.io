
# hugo -vvv --debug --logLevel debug --config config.toml,site-${input:hugoWebsite}.toml -b https://${input:hugoWebsite} -d dist/${input:hugoWebsite} --cleandestDir

# Configure environment
env ?= production

# Configure destination
dest ?= public

# Define default parameters
args := --environment=$(env) --destination=$(dest) --cleanDestinationDir --verbose

# Enable warnings
warn ?=
ifneq ($(strip $(warn)),)
	args += --printI18nWarnings --printPathWarnings --printUnusedTemplates
endif

# Enable debugging
debug ?=
ifneq ($(strip $(debug)),)
	args += --debug --logLevel=debug
endif

# Enable minification
minify ?=
ifneq ($(strip $(minify)),)
	args += --minify
endif

# Define site-specific configuration
domain ?=
ifneq ($(strip $(domain)),)
	args += --baseURL="https://$(domain)" --config=config/$(domain)/hugo.toml
endif

.PHONY: all
all: dev

.PHONY: build
build:
	hugo $(args)

.PHONY: dev
dev:
	hugo server $(args) --bind 0.0.0.0 -D -F -w

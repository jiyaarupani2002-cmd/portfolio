#!/usr/bin/env sh

PROJECT_DIR=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
export PATH="$PROJECT_DIR/.node/bin:$PATH"

exec "$@"

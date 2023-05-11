set -e
rimraf docs
typedoc --plugin typedoc-plugin-markdown --out docs src/index.ts
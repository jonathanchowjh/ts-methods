set -e
rimraf docs
typedoc --plugin typedoc-plugin-markdown --out docs scripts/utils.ts
set -e
rimraf docs
typedoc --plugin typedoc-plugin-markdown --out docs src/error.ts src/fs.ts src/github.ts src/net.ts src/os.ts src/repl.ts src/structs.ts src/types.ts
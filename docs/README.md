ts-files / [Modules](modules.md)

# ts-methods

ts-methods is a typescript scripting library with an array of utility functions; including error and file handling, terminal executions, data structures, REPLs, utility types, github clone scripts, and more. The following is a list of helpers and how to use them:

- [Error Helpers](#Error-Helpers)
- [File Helpers](#File-Helpers)
- [Structs Helpers (data structures)](#Structs-Helpers)
- [Type Helpers](#Type-Helpers)
- [OS Helpers (terminal execution)](#OS-Helpers)
- [REPL Helpers](#REPL-Helpers)
- [Net Helpers](#Net-Helpers)
- [Github Helpers](#Github-Helpers)
- [Global Helpers](#Global-Helpers)

### Installation

```shell
npm i ts-methods
```

### Error Helpers

```ts
import { UtilsError, catchError } from "ts-methods/dist/error";

const addFunc = (a: number, b: number) => a + b;
const throwUtilsError = (msg?: string): void => {
  const message = msg ?? "sample error";
  throw new UtilsError(message);
};

const main = async () => {
  // Catch Thrown Error
  await catchError<ReturnType<typeof throwUtilsError>>(() =>
    throwUtilsError("error1")
  );
  const sum = await catchError<ReturnType<typeof addFunc>>(
    () => addFunc(5, 2) // Output: 7
  );
};

main().then((val) => console.log(val));
```

### File Helpers

```ts
import {
  CONSTANTS,
  createIfNotExist,
  root,
  writeJson2D,
  readJson2D,
} from "ts-methods/dist/fs";

const main = async () => {
  // Create File / Path
  await createIfNotExist(await root(CONSTANTS));
  // 2D JSON
  const written2 = await writeJson2D(
    await root(CONSTANTS),
    "key1",
    "key2",
    "value"
  );
  if (!written2) {
    console.log("Not Written 2D json");
  } else {
    console.log(await readJson2D(await root(CONSTANTS), "key1", "key2"));
  }
};

main().then((val) => console.log(val));
```

### Structs Helpers

```ts
import structs from "ts-methods/dist/structs";

const main = async () => {
  // Priority Queue
  const pq = new structs.PriorityQueue<string>();
  pq.enqueue("item1", 2);
  pq.enqueue("item2", 1);
  pq.enqueue("item3", 3);

  console.log(pq.dequeue()); // Output: item2
  console.log(pq.dequeue()); // Output: item1
  console.log(pq.dequeue()); // Output: item3

  // Doubly Linked List
  const list = new structs.DoublyLinkedList<number>();
  // HashMap
  const map = new structs.HashMap<string, number>();
};

main().then((val) => console.log(val));
```

### Type Helpers

```ts
import {
  Expect,
  Equal,
  NotEqual,
  Debug,
  MergeInsertions,
  Alike,
  ExpectExtends,
  doNotExecute,
} from "../src/types";

export const main = async () => {
  doNotExecute(async () => {
    type Person = { name: string; age: number };
    type Person1 = { name: string; age: number };
    type Address = { name: string; age: number; street: string };

    type test2 = [Expect<Equal<1, 1>>];
    type test3 = [Expect<NotEqual<1, 2>>];
    const test6: Debug<Person> = { name: "John Doe", age: 8 };
    const test7: MergeInsertions<Person & Address> = {
      name: "John Doe",
      age: 9,
      street: "Cortney Terrace",
    };
    type test8 = [Expect<Alike<Person, Person1>>];
    type test9 = [Expect<ExpectExtends<Person, Address>>];
  });
};

main().then((val) => console.log(val));
```

### OS Helpers

```ts
import {
  execute,
  catchExecute,
  safeExecute,
  uname,
  unameExecute,
} from "ts-methods/dist/os";

const main = async () => {
  // Execute
  console.log(await execute("echo me")); // Output: { stdout: "me", stderr: "" }
  console.log(await catchExecute("echo me")); // Output: { stdout: "me", stderr: "" }
  console.log(await safeExecute("echo me")); // Output: "me"

  // Uname
  console.log(await uname()); // Output: "Mac"
  console.log(await unameExecute({ Mac: "ls" })());
};

main().then((val) => console.log(val));
```

### REPL Helpers

```ts
import { readLine, readLineSelect, REPL } from "ts-methods/dist/repl";

class Chat extends REPL {
  constructor() {
    super("Enter Text: ", true);
  }
  override default(cmds: string[]): void {
    console.log(cmds);
  }
  edit(cmds: string[]): void {
    if (cmds.length < 3) return;
    const second = cmds[1];
    const third = cmds[2];
    if (second != "question") return;
    this.question = third;
  }
}

export const main = async () => {
  console.log(await readLine("Question 1: "));
  console.log(await readLineSelect("Question 2: ", ["boy", "girl"]));
  new Chat();
};

main().then((val) => console.log(val));
```

### Github Helpers

```ts
import { GithubREPL, gitRepoUrlAdd, cloneAll } from "ts-methods/dist/github";

const main = async () => {
  await gitRepoUrlAdd();
  await cloneAll();
  new GithubREPL();
};

main().then((val) => console.log(val));
```

### Global Helpers

```sh
# Add "types/global.d.ts" to the (include array in tsconfig.json)
rm -rf types && mkdir types
cp -r node_modules/ts-methods/dist/global.d.ts types/global.d.ts
```

## Future Expansion

- Net functions for tcp, http, https, udp, http/3.0, sniffer
- Math functions for array manipulations, to graph
- Util functions for array manipulations for type helpers (eg. Pick)
- Struct functions for Stack, Graph (improve Priority Queue)
- OS functions add cronjobs
- FS functions add csv
- https://www.npmjs.com/package/fs-extra

## Dev Ops

- AWS functions for EC2, S3
- Docker functions for DBs, cache, jenkins, node, kubernetes

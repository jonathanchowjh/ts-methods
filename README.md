# ts-methods

### Installation

```shell
npm i ts-methods
```

### Usage

```ts
import "ts-methods/dist/src/ts-reset";
import {} from "ts-methods/dist/src/error";
import {} from "ts-methods/dist/src/fs";
import {} from "ts-methods/dist/src/net";
import {} from "ts-methods/dist/src/os";
import {} from "ts-methods/dist/src/repl";

const {
  jsonSave,
  jsonRead,
  readLine,
  readLineSelect,
  ErrorDefault,
  filePathExists,
  filePathCreate,
  filePathRead,
  filePathRoot,
  pathResolve,
} = methods;

const main = async () => {
  // Example: json file save
  await jsonSave(
    "addresses",
    "goerli-utility",
    "0x65B165C17a8660e84e4427c4024fcB784577AB05"
  );
  const ret: string = (await jsonRead("addresses", "goerli-utility")) as string;

  // Example: readline
  const name1: string = await readLine("What is your name: ");
  const name2: string = await readLineSelect("What is your name: ", [
    "Alice",
    "Bryan",
    "Sam",
  ]);
  if (name1 === name2) throw ErrorDefault("same name error");

  // Example: create file
  try {
    await filePathExists(filePathRoot(), "ts-methods.json"); // throws error
  } catch (err: unknown) {
    await filePathCreate(filePathRoot(), "ts-methods.json"); // throws error
    const filePath: string[] = await filePathRead(
      pathResolve(filePathRoot(), ""),
      "ts-methods.json"
    );
  }
};

main()
  .then((val) => console.log(val))
  .catch((err) => console.error(err));
```

### fs

```ts
import {
  pathIterate,
  pathExists,
  pathCreate,
  pathFind,
  rootDefault,
  root,
  writeJson,
  readJson,
  writeJson2D,
  readJson2D,
} from "../src/fs";

const main = async () => {
  // ROOT and WALK
  console.log(await rootDefault());
  console.log(await root("scripts/sample.json"));

  // Create File / Path
  await pathIterate(await rootDefault(), true, async (p, c) => 0);
  await pathCreate(await root("scripts/sample.json"), true);
  console.log(await pathFind(await rootDefault(), `sample.json`));
  console.log(
    `sample.json exists: ${await pathExists(await root("scripts/sample.json"))}`
  );

  // JSON
  const written1 = await writeJson(await root("scripts/sample.json"), {
    sample: "words",
  });
  if (!written1) {
    console.log("Not Written json");
  } else {
    console.log(await readJson(await root("scripts/sample.json")));
  }

  // 2D JSON
  const written2 = await writeJson2D(
    await root("scripts/sample.json"),
    "key1",
    "key2",
    "value"
  );
  if (!written2) {
    console.log("Not Written 2D json");
  } else {
    console.log(
      await readJson2D(await root("scripts/sample.json"), "key1", "key2")
    );
  }
};

main()
  .then((val) => console.log(val))
  .catch((err) => console.log(err));
```

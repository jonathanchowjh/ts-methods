ts-impl / [Exports](modules.md)

# ts-utils

### Installation

```shell
npm i ts-impl
```

### Usage

```ts
import utils from "ts-impl";

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
  path,
} = utils;

const main = async () => {
  // Example: json file save
  await jsonSave(
    "addresses",
    "goerli-utility",
    "0x65B165C17a8660e84e4427c4024fcB784577AB05"
  );
  await jsonRead("addresses", "goerli-utility");

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
    await filePathExists(filePathRoot(), "artifacts/json/constants.json");
  } catch (err: unknown) {
    await filePathCreate(filePathRoot(), "artifacts/json/constants.json");
    const filePath: string[] = await filePathRead(
      path.resolve(filePathRoot(), "artifacts"),
      "Utility"
    );
  }
};

main()
  .then((val) => console.log(val))
  .catch((err) => console.error(err));
```

## Documentation

[FULL DOCUMENTATION](https://github.com/jonathanchowjh/ts-tools/docs/modules.md)

▸ **ErrorDefault**(`error`): [`UtilsError`](classes/UtilsError.md)

Returns Error based on function name of calling contract

**`Example`**

```ts
throw ErrorDefault("Error Message");
```

#### Parameters

| Name    | Type     | Description      |
| :------ | :------- | :--------------- |
| `error` | `string` | message of error |

▸ **filePathCreate**(`root`, `location`, `isAllFolders?`): `Promise`<`void`\>

Creates dir and file if does not exists

**`Example`**

```ts
await filePathCreate(filePathRoot(), "artifacts/json/constants.json");
```

#### Parameters

| Name            | Type      | Description                                         |
| :-------------- | :-------- | :-------------------------------------------------- |
| `root`          | `string`  | root folder (path that has been confirmed to exist) |
| `location`      | `string`  | location to check if exist                          |
| `isAllFolders?` | `boolean` | -                                                   |

▸ **filePathExists**(`root`, `location`): `Promise`<`void`\>

Throws Error if folder does not exists

**`Example`**

```ts
await filePathExists(filePathRoot(), "artifacts/json/constants.json");
```

#### Parameters

| Name       | Type     | Description                                         |
| :--------- | :------- | :-------------------------------------------------- |
| `root`     | `string` | root folder (path that has been confirmed to exist) |
| `location` | `string` | location to check if exist                          |

▸ **filePathRead**(`currentDirPath`, `fileName`): `Promise`<`string`[]\>

Getting File Path from Folder

**`Example`**

```ts
await filePathRead(path.resolve(filePathRoot(), "artifacts"), "Utility");
```

#### Parameters

| Name             | Type     | Description                                    |
| :--------------- | :------- | :--------------------------------------------- |
| `currentDirPath` | `string` | folder location                                |
| `fileName`       | `string` | name of file (eg. 'Utility' given Utility.sol) |

▸ **filePathRoot**(): `string`

Get filePathRoot absolute path

**`Example`**

```ts
filePathRoot();
```

▸ **filePathWalk**(`dir`): `Promise`<`string`[]\>

Get all files from a given parent directory

**`Example`**

```ts
await filePathWalk(path.resolve(filePathRoot(), "artifacts"));
```

#### Parameters

| Name  | Type     | Description     |
| :---- | :------- | :-------------- |
| `dir` | `string` | folder location |

▸ **filterKeys**(`obj`, `str`): `Object`

Filter Object by its key value

**`Example`**

```ts
filterKeys(
   {
     'goerli-utility': ''
     'localhost-utility': ''
   },
   'goerli'
);
```

#### Parameters

| Name  | Type     | Description              |
| :---- | :------- | :----------------------- |
| `obj` | `Object` | Object to filter through |
| `str` | `string` | Value to filter by       |

▸ **jsonRead**(`type?`, `name?`, `file?`): `Promise`<`undefined` \| `string` \| { `[k: string]`: `any`; }\>

This reads json file given type and name

**`Example`**

```ts
await jsonRead("addresses", "goerli-utility");
```

#### Parameters

| Name    | Type     | Description                                        |
| :------ | :------- | :------------------------------------------------- |
| `type?` | `string` | (Optional) Type of saved data (eg. addresses)      |
| `name?` | `string` | (Optional) Name of saved data (eg. goerli-utility) |
| `file?` | `string` | (Optional) File that data is saved in              |

▸ **jsonReadFull**(`file?`): `Promise`<{ `[k: string]`: `any`; }\>

Parsed JSON given file (absolute path / relative path to root)

**`Example`**

```ts
await jsonReadFull("utils/json/constants.json");
```

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `file?` | `string` |

▸ **jsonSave**(`type`, `name`, `value`, `file?`): `Promise`<`void`\>

This saves to json file given type, name, and value

**`Example`**

```ts
await jsonSave(
  "addresses",
  "goerli-utility",
  "0x65B165C17a8660e84e4427c4024fcB784577AB05"
);
```

#### Parameters

| Name    | Type     | Description                                                          |
| :------ | :------- | :------------------------------------------------------------------- |
| `type`  | `string` | Type of saved data (eg. addresses)                                   |
| `name`  | `string` | Name of saved data (eg. goerli-utility)                              |
| `value` | `string` | Value of saved data (eg. 0x65B165C17a8660e84e4427c4024fcB784577AB05) |
| `file?` | `string` | (Optional) File that data is saved in                                |

▸ **jsonSaveFull**(`obj`, `file?`): `Promise`<`void`\>

This saves to json file full

**`Example`**

```ts
await jsonSaveFull({ addresses: { key: "value" } });
```

#### Parameters

| Name    | Type     | Description                           |
| :------ | :------- | :------------------------------------ |
| `obj`   | `Object` | Object to save                        |
| `file?` | `string` | (Optional) File that data is saved in |

▸ **readLine**(`question`): `Promise`<`string`\>

readline question from terminal

**`Example`**

```ts
const name: string = await readLine("What is your name: ");
```

#### Parameters

| Name       | Type     | Description                                   |
| :--------- | :------- | :-------------------------------------------- |
| `question` | `string` | question prompt before waiting for user input |

▸ **readLineSelect**(`question`, `select`): `Promise`<`string`\>

readline question from terminal with selection

**`Example`**

```ts
const name: string = await readLineSelect("What is your name: ", [
  "Alice",
  "Bryan",
  "Sam",
]);
```

#### Parameters

| Name       | Type       | Description                                   |
| :--------- | :--------- | :-------------------------------------------- |
| `question` | `string`   | question prompt before waiting for user input |
| `select`   | `string`[] | question prompt before waiting for user input |

▸ **stackTrace**(`fullTrace?`, `withLocation?`): `any`

Returns stack trace of previous function

**`Example`**

```ts
stackTrace(true, true);
```

#### Parameters

| Name            | Type      |
| :-------------- | :-------- |
| `fullTrace?`    | `boolean` |
| `withLocation?` | `boolean` |

▸ **timeout**(`ms`): `Promise`<`void`\>

Promise that waits for given number of milliseconds

**`Example`**

```ts
await timeout(1000);
```

#### Parameters

| Name | Type     | Description              |
| :--- | :------- | :----------------------- |
| `ms` | `number` | milliseconds to wait for |

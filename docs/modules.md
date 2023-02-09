[ts-tools](README.md) / Exports

# ts-tools

## Table of contents

### Classes

- [UtilsError](classes/UtilsError.md)

### Variables

- [JSON_LOCATION](modules.md#json_location)

### Functions

- [ErrorDefault](modules.md#errordefault)
- [filePathCreate](modules.md#filepathcreate)
- [filePathExists](modules.md#filepathexists)
- [filePathRead](modules.md#filepathread)
- [filePathRoot](modules.md#filepathroot)
- [filePathWalk](modules.md#filepathwalk)
- [filterKeys](modules.md#filterkeys)
- [jsonRead](modules.md#jsonread)
- [jsonReadFull](modules.md#jsonreadfull)
- [jsonSave](modules.md#jsonsave)
- [jsonSaveFull](modules.md#jsonsavefull)
- [readLine](modules.md#readline)
- [readLineSelect](modules.md#readlineselect)
- [stackTrace](modules.md#stacktrace)
- [timeout](modules.md#timeout)

## Variables

### JSON_LOCATION

• `Const` **JSON_LOCATION**: `string`

#### Defined in

[scripts/utils.ts:6](https://github.com/jonathanchowjh/ts-utils/blob/4211df4/scripts/utils.ts#L6)

## Functions

### ErrorDefault

▸ **ErrorDefault**(`error`): [`UtilsError`](classes/UtilsError.md)

Returns Error based on function name of calling contract

**`Example`**

```ts
ErrorDefault("Error Message");
```

#### Parameters

| Name    | Type     | Description      |
| :------ | :------- | :--------------- |
| `error` | `string` | message of error |

#### Returns

[`UtilsError`](classes/UtilsError.md)

#### Defined in

[scripts/utils.ts:249](https://github.com/jonathanchowjh/ts-utils/blob/4211df4/scripts/utils.ts#L249)

---

### filePathCreate

▸ **filePathCreate**(`root`, `location`, `isAllFolders?`): `Promise`<`void`\>

Creates dir and file if does not exists

**`Example`**

```ts
filePathCreate(filePathRoot(), "artifacts/json/constants.json");
```

#### Parameters

| Name            | Type      | Description                                         |
| :-------------- | :-------- | :-------------------------------------------------- |
| `root`          | `string`  | root folder (path that has been confirmed to exist) |
| `location`      | `string`  | location to check if exist                          |
| `isAllFolders?` | `boolean` | -                                                   |

#### Returns

`Promise`<`void`\>

Promise to create if not exist

#### Defined in

[scripts/utils.ts:385](https://github.com/jonathanchowjh/ts-utils/blob/4211df4/scripts/utils.ts#L385)

---

### filePathExists

▸ **filePathExists**(`root`, `location`): `Promise`<`void`\>

Throws Error if folder does not exists

**`Example`**

```ts
filePathExists(filePathRoot(), "artifacts/json/constants.json");
```

#### Parameters

| Name       | Type     | Description                                         |
| :--------- | :------- | :-------------------------------------------------- |
| `root`     | `string` | root folder (path that has been confirmed to exist) |
| `location` | `string` | location to check if exist                          |

#### Returns

`Promise`<`void`\>

Promise to check if path exist

#### Defined in

[scripts/utils.ts:357](https://github.com/jonathanchowjh/ts-utils/blob/4211df4/scripts/utils.ts#L357)

---

### filePathRead

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

#### Returns

`Promise`<`string`[]\>

List of Absolute file paths

#### Defined in

[scripts/utils.ts:289](https://github.com/jonathanchowjh/ts-utils/blob/4211df4/scripts/utils.ts#L289)

---

### filePathRoot

▸ **filePathRoot**(): `string`

Get filePathRoot absolute path

**`Example`**

```ts
filePathRoot();
```

#### Returns

`string`

filePathRoot absolute path

#### Defined in

[scripts/utils.ts:342](https://github.com/jonathanchowjh/ts-utils/blob/4211df4/scripts/utils.ts#L342)

---

### filePathWalk

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

#### Returns

`Promise`<`string`[]\>

List of Absolute file paths

#### Defined in

[scripts/utils.ts:317](https://github.com/jonathanchowjh/ts-utils/blob/4211df4/scripts/utils.ts#L317)

---

### filterKeys

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

#### Returns

`Object`

Filtered Object

#### Defined in

[scripts/utils.ts:199](https://github.com/jonathanchowjh/ts-utils/blob/4211df4/scripts/utils.ts#L199)

---

### jsonRead

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

#### Returns

`Promise`<`undefined` \| `string` \| { `[k: string]`: `any`; }\>

Object or string, depending on input

#### Defined in

[scripts/utils.ts:121](https://github.com/jonathanchowjh/ts-utils/blob/4211df4/scripts/utils.ts#L121)

---

### jsonReadFull

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

#### Returns

`Promise`<{ `[k: string]`: `any`; }\>

JSON Object

#### Defined in

[scripts/utils.ts:74](https://github.com/jonathanchowjh/ts-utils/blob/4211df4/scripts/utils.ts#L74)

---

### jsonSave

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

#### Returns

`Promise`<`void`\>

Promise to finish writing to file

#### Defined in

[scripts/utils.ts:160](https://github.com/jonathanchowjh/ts-utils/blob/4211df4/scripts/utils.ts#L160)

---

### jsonSaveFull

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

#### Returns

`Promise`<`void`\>

Promise to finish writing to file

#### Defined in

[scripts/utils.ts:98](https://github.com/jonathanchowjh/ts-utils/blob/4211df4/scripts/utils.ts#L98)

---

### readLine

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

#### Returns

`Promise`<`string`\>

Object or string, depending on input

#### Defined in

[scripts/utils.ts:48](https://github.com/jonathanchowjh/ts-utils/blob/4211df4/scripts/utils.ts#L48)

---

### readLineSelect

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

#### Returns

`Promise`<`string`\>

Object or string, depending on input

#### Defined in

[scripts/utils.ts:22](https://github.com/jonathanchowjh/ts-utils/blob/4211df4/scripts/utils.ts#L22)

---

### stackTrace

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

#### Returns

`any`

Returns stack trace of previous function

#### Defined in

[scripts/utils.ts:224](https://github.com/jonathanchowjh/ts-utils/blob/4211df4/scripts/utils.ts#L224)

---

### timeout

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

#### Returns

`Promise`<`void`\>

Promise that waits for given number of milliseconds

#### Defined in

[scripts/utils.ts:211](https://github.com/jonathanchowjh/ts-utils/blob/4211df4/scripts/utils.ts#L211)

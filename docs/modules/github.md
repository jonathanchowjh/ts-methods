[fs-tools](../README.md) / [Modules](../modules.md) / github

# Module: github

## Table of contents

### Classes

- [GithubREPL](../classes/github.GithubREPL.md)

### Variables

- [LINK_KEY](github.md#link_key)
- [STORAGE](github.md#storage)

### Functions

- [branchLsLocal](github.md#branchlslocal)
- [branchLsLocalActive](github.md#branchlslocalactive)
- [branchLsRemote](github.md#branchlsremote)
- [branchUpdate](github.md#branchupdate)
- [branchUpdateAll](github.md#branchupdateall)
- [branchUpdateOne](github.md#branchupdateone)
- [cloneAll](github.md#cloneall)
- [gitRepoUrlAdd](github.md#gitrepourladd)
- [gitRepoUrlDelete](github.md#gitrepourldelete)
- [gitRepoUrlRead](github.md#gitrepourlread)
- [gitRepoUrlValid](github.md#gitrepourlvalid)

## Variables

### LINK_KEY

• `Const` **LINK_KEY**: `"links"`

#### Defined in

[src/github.ts:20](https://github.com/jonathanchowjh/ts-utils/blob/39d9b52/src/github.ts#L20)

---

### STORAGE

• `Const` **STORAGE**: `"storage"`

#### Defined in

[src/github.ts:19](https://github.com/jonathanchowjh/ts-utils/blob/39d9b52/src/github.ts#L19)

## Functions

### branchLsLocal

▸ **branchLsLocal**(`file`): `Promise`<`string`[]\>

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `file` | `string` |

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/github.ts:294](https://github.com/jonathanchowjh/ts-utils/blob/39d9b52/src/github.ts#L294)

---

### branchLsLocalActive

▸ **branchLsLocalActive**(`file`): `Promise`<`string`\>

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `file` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/github.ts:281](https://github.com/jonathanchowjh/ts-utils/blob/39d9b52/src/github.ts#L281)

---

### branchLsRemote

▸ **branchLsRemote**(`file`): `Promise`<`string`[]\>

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `file` | `string` |

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/github.ts:305](https://github.com/jonathanchowjh/ts-utils/blob/39d9b52/src/github.ts#L305)

---

### branchUpdate

▸ **branchUpdate**(`file`, `verbose?`): `Promise`<{ `[k: string]`: { `[j: string]`: { `[l: string]`: `string`; }; }; }\>

#### Parameters

| Name       | Type      |
| :--------- | :-------- |
| `file`     | `string`  |
| `verbose?` | `boolean` |

#### Returns

`Promise`<{ `[k: string]`: { `[j: string]`: { `[l: string]`: `string`; }; }; }\>

#### Defined in

[src/github.ts:233](https://github.com/jonathanchowjh/ts-utils/blob/39d9b52/src/github.ts#L233)

---

### branchUpdateAll

▸ **branchUpdateAll**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/github.ts:176](https://github.com/jonathanchowjh/ts-utils/blob/39d9b52/src/github.ts#L176)

---

### branchUpdateOne

▸ **branchUpdateOne**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[src/github.ts:204](https://github.com/jonathanchowjh/ts-utils/blob/39d9b52/src/github.ts#L204)

---

### cloneAll

▸ **cloneAll**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/github.ts:144](https://github.com/jonathanchowjh/ts-utils/blob/39d9b52/src/github.ts#L144)

---

### gitRepoUrlAdd

▸ **gitRepoUrlAdd**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[src/github.ts:98](https://github.com/jonathanchowjh/ts-utils/blob/39d9b52/src/github.ts#L98)

---

### gitRepoUrlDelete

▸ **gitRepoUrlDelete**(): `Promise`<{ `[k: string]`: `string`; }\>

#### Returns

`Promise`<{ `[k: string]`: `string`; }\>

#### Defined in

[src/github.ts:126](https://github.com/jonathanchowjh/ts-utils/blob/39d9b52/src/github.ts#L126)

---

### gitRepoUrlRead

▸ **gitRepoUrlRead**(): `Promise`<{ `[k: string]`: `string`; }\>

#### Returns

`Promise`<{ `[k: string]`: `string`; }\>

#### Defined in

[src/github.ts:118](https://github.com/jonathanchowjh/ts-utils/blob/39d9b52/src/github.ts#L118)

---

### gitRepoUrlValid

▸ **gitRepoUrlValid**(`str`): `boolean`

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `str` | `string` |

#### Returns

`boolean`

#### Defined in

[src/github.ts:136](https://github.com/jonathanchowjh/ts-utils/blob/39d9b52/src/github.ts#L136)

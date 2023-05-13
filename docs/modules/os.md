[ts-methods](../README.md) / [Modules](../modules.md) / os

# Module: os

## Table of contents

### Type Aliases

- [Machine](os.md#machine)
- [MachineFunctions](os.md#machinefunctions)

### Functions

- [catchExecute](os.md#catchexecute)
- [cron](os.md#cron)
- [execute](os.md#execute)
- [safeExecute](os.md#safeexecute)
- [uname](os.md#uname)
- [unameExecute](os.md#unameexecute)

## Type Aliases

### Machine

Ƭ **Machine**: `"Linux"` \| `"Mac"` \| `"Cygwin"` \| `"MinGw"`

#### Defined in

[src/os.ts:42](https://github.com/jonathanchowjh/ts-utils/blob/7ca4bf8/src/os.ts#L42)

---

### MachineFunctions

Ƭ **MachineFunctions**: { [key in Machine]?: string }

#### Defined in

[src/os.ts:44](https://github.com/jonathanchowjh/ts-utils/blob/7ca4bf8/src/os.ts#L44)

## Functions

### catchExecute

▸ **catchExecute**(`command`, `verbose?`): `Promise`<`null` \| `Promise`<{ `stderr`: `string` ; `stdout`: `string` }\>\>

#### Parameters

| Name       | Type      |
| :--------- | :-------- |
| `command`  | `string`  |
| `verbose?` | `boolean` |

#### Returns

`Promise`<`null` \| `Promise`<{ `stderr`: `string` ; `stdout`: `string` }\>\>

#### Defined in

[src/os.ts:16](https://github.com/jonathanchowjh/ts-utils/blob/7ca4bf8/src/os.ts#L16)

---

### cron

▸ **cron**(): `void`

uname -s
Linux*) machine=Linux;;
Darwin*) machine=Mac;;
CYGWIN*) machine=Cygwin;;
MINGW*) machine=MinGw;;
\*) machine="UNKNOWN:${unameOut}"
https://www.hostinger.com/tutorials/cron-job

#### Returns

`void`

#### Defined in

[src/os.ts:81](https://github.com/jonathanchowjh/ts-utils/blob/7ca4bf8/src/os.ts#L81)

---

### execute

▸ **execute**(`command`): `Promise`<{ `stderr`: `string` ; `stdout`: `string` }\>

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `command` | `string` |

#### Returns

`Promise`<{ `stderr`: `string` ; `stdout`: `string` }\>

#### Defined in

[src/os.ts:5](https://github.com/jonathanchowjh/ts-utils/blob/7ca4bf8/src/os.ts#L5)

---

### safeExecute

▸ **safeExecute**(`command`, `verbose?`): `Promise`<`string`\>

#### Parameters

| Name       | Type      |
| :--------- | :-------- |
| `command`  | `string`  |
| `verbose?` | `boolean` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/os.ts:28](https://github.com/jonathanchowjh/ts-utils/blob/7ca4bf8/src/os.ts#L28)

---

### uname

▸ **uname**(): `Promise`<[`Machine`](os.md#machine)\>

#### Returns

`Promise`<[`Machine`](os.md#machine)\>

#### Defined in

[src/os.ts:50](https://github.com/jonathanchowjh/ts-utils/blob/7ca4bf8/src/os.ts#L50)

---

### unameExecute

▸ **unameExecute**(`functions`, `verbose?`): () => `Promise`<`null` \| { `stderr`: `string` ; `stdout`: `string` }\>

#### Parameters

| Name        | Type                                         |
| :---------- | :------------------------------------------- |
| `functions` | [`MachineFunctions`](os.md#machinefunctions) |
| `verbose?`  | `boolean`                                    |

#### Returns

`fn`

▸ (): `Promise`<`null` \| { `stderr`: `string` ; `stdout`: `string` }\>

##### Returns

`Promise`<`null` \| { `stderr`: `string` ; `stdout`: `string` }\>

#### Defined in

[src/os.ts:62](https://github.com/jonathanchowjh/ts-utils/blob/7ca4bf8/src/os.ts#L62)

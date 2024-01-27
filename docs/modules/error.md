[ts-files](../README.md) / [Modules](../modules.md) / error

# Module: error

## Table of contents

### Classes

- [DefaultError](../classes/error.DefaultError.md)
- [UtilsError](../classes/error.UtilsError.md)

### Functions

- [catchError](error.md#catcherror)
- [isError](error.md#iserror)
- [isNull](error.md#isnull)
- [stackTrace](error.md#stacktrace)
- [toError](error.md#toerror)

## Functions

### catchError

▸ **catchError**<`R`\>(`callback`, `verbose?`): `Promise`<`null` \| `R`\>

#### Type parameters

| Name |
| :--- |
| `R`  |

#### Parameters

| Name       | Type      |
| :--------- | :-------- |
| `callback` | () => `R` |
| `verbose?` | `boolean` |

#### Returns

`Promise`<`null` \| `R`\>

#### Defined in

[src/error.ts:47](https://github.com/jonathanchowjh/ts-utils/blob/3b2a65c/src/error.ts#L47)

---

### isError

▸ **isError**(`error`): error is Error

#### Parameters

| Name    | Type      |
| :------ | :-------- |
| `error` | `unknown` |

#### Returns

error is Error

#### Defined in

[src/error.ts:75](https://github.com/jonathanchowjh/ts-utils/blob/3b2a65c/src/error.ts#L75)

---

### isNull

▸ **isNull**(`val`): `boolean`

#### Parameters

| Name  | Type  |
| :---- | :---- |
| `val` | `any` |

#### Returns

`boolean`

#### Defined in

[src/error.ts:71](https://github.com/jonathanchowjh/ts-utils/blob/3b2a65c/src/error.ts#L71)

---

### stackTrace

▸ **stackTrace**(`noFilter?`, `noDataParsing?`, `noFilterTrace?`): `string`[]

#### Parameters

| Name             | Type      |
| :--------------- | :-------- |
| `noFilter?`      | `boolean` |
| `noDataParsing?` | `boolean` |
| `noFilterTrace?` | `boolean` |

#### Returns

`string`[]

#### Defined in

[src/error.ts:21](https://github.com/jonathanchowjh/ts-utils/blob/3b2a65c/src/error.ts#L21)

---

### toError

▸ **toError**(`maybeError`): `Error`

#### Parameters

| Name         | Type      |
| :----------- | :-------- |
| `maybeError` | `unknown` |

#### Returns

`Error`

#### Defined in

[src/error.ts:82](https://github.com/jonathanchowjh/ts-utils/blob/3b2a65c/src/error.ts#L82)

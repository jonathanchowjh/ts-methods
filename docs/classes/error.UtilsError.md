[ts-methods](../README.md) / [Modules](../modules.md) / [error](../modules/error.md) / UtilsError

# Class: UtilsError

[error](../modules/error.md).UtilsError

## Hierarchy

- `Error`

  ↳ **`UtilsError`**

## Table of contents

### Constructors

- [constructor](error.UtilsError.md#constructor)

### Properties

- [cause](error.UtilsError.md#cause)
- [message](error.UtilsError.md#message)
- [name](error.UtilsError.md#name)
- [stack](error.UtilsError.md#stack)
- [prepareStackTrace](error.UtilsError.md#preparestacktrace)
- [stackTraceLimit](error.UtilsError.md#stacktracelimit)

### Methods

- [captureStackTrace](error.UtilsError.md#capturestacktrace)

## Constructors

### constructor

• **new UtilsError**(`error`, `errorSource?`)

#### Parameters

| Name           | Type     |
| :------------- | :------- |
| `error`        | `string` |
| `errorSource?` | `string` |

#### Overrides

Error.constructor

#### Defined in

[src/error.ts:5](https://github.com/jonathanchowjh/ts-utils/blob/205b5b1/src/error.ts#L5)

## Properties

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

Error.cause

#### Defined in

node_modules/typescript/lib/lib.es2022.error.d.ts:26

---

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1054

---

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1053

---

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1055

---

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### Parameters

| Name          | Type         |
| :------------ | :----------- |
| `err`         | `Error`      |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:11

---

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name              | Type       |
| :---------------- | :--------- |
| `targetObject`    | `object`   |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:4

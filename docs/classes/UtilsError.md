[ts-methods](../README.md) / [Exports](../modules.md) / UtilsError

# Class: UtilsError

All Errors thrown from Error Default

**`Param`**

message of error

**`Example`**

```ts
try {
  await filePathCreate(filePathRoot(), `${storageFileName}`, true);
} catch (err: unknown) {
  if (
    !(err instanceof UtilsError) ||
    !err.message.includes("ts-methods::filePathCreate")
  )
    throw ErrorDefault(
      "Rethrown Error: Not expected repo-scripts::filePathCreate error"
    );
}
```

## Hierarchy

- `Error`

  ↳ **`UtilsError`**

## Table of contents

### Constructors

- [constructor](UtilsError.md#constructor)

### Properties

- [message](UtilsError.md#message)
- [name](UtilsError.md#name)
- [stack](UtilsError.md#stack)
- [prepareStackTrace](UtilsError.md#preparestacktrace)
- [stackTraceLimit](UtilsError.md#stacktracelimit)

### Methods

- [captureStackTrace](UtilsError.md#capturestacktrace)

## Constructors

### constructor

• **new UtilsError**(`msg`)

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `msg` | `string` |

#### Overrides

Error.constructor

#### Defined in

[src/utils.ts:273](https://github.com/jonathanchowjh/ts-utils/blob/b6d944d/src/utils.ts#L273)

## Properties

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

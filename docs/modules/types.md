[ts-github](../README.md) / [Modules](../modules.md) / types

# Module: types

## Table of contents

### Type Aliases

- [Alike](types.md#alike)
- [Debug](types.md#debug)
- [Equal](types.md#equal)
- [Expect](types.md#expect)
- [ExpectExtends](types.md#expectextends)
- [ExpectFalse](types.md#expectfalse)
- [ExpectTrue](types.md#expecttrue)
- [ExpectValidArgs](types.md#expectvalidargs)
- [IsAny](types.md#isany)
- [IsFalse](types.md#isfalse)
- [IsTrue](types.md#istrue)
- [MergeInsertions](types.md#mergeinsertions)
- [NotAny](types.md#notany)
- [NotEqual](types.md#notequal)
- [UnionToIntersection](types.md#uniontointersection)

### Functions

- [doNotExecute](types.md#donotexecute)

## Type Aliases

### Alike

Ƭ **Alike**<`X`, `Y`\>: [`Equal`](types.md#equal)<[`MergeInsertions`](types.md#mergeinsertions)<`X`\>, [`MergeInsertions`](types.md#mergeinsertions)<`Y`\>\>

#### Type parameters

| Name |
| :--- |
| `X`  |
| `Y`  |

#### Defined in

[src/types.ts:24](https://github.com/jonathanchowjh/ts-utils/blob/b98ab75/src/types.ts#L24)

---

### Debug

Ƭ **Debug**<`T`\>: { [K in keyof T]: T[K] }

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Defined in

[src/types.ts:19](https://github.com/jonathanchowjh/ts-utils/blob/b98ab75/src/types.ts#L19)

---

### Equal

Ƭ **Equal**<`X`, `Y`\>: <T\>() => `T` extends `X` ? `1` : `2` extends <T\>() => `T` extends `Y` ? `1` : `2` ? `true` : `false`

#### Type parameters

| Name |
| :--- |
| `X`  |
| `Y`  |

#### Defined in

[src/types.ts:9](https://github.com/jonathanchowjh/ts-utils/blob/b98ab75/src/types.ts#L9)

---

### Expect

Ƭ **Expect**<`T`\>: `T`

#### Type parameters

| Name | Type           |
| :--- | :------------- |
| `T`  | extends `true` |

#### Defined in

[src/types.ts:3](https://github.com/jonathanchowjh/ts-utils/blob/b98ab75/src/types.ts#L3)

---

### ExpectExtends

Ƭ **ExpectExtends**<`VALUE`, `EXPECTED`\>: `EXPECTED` extends `VALUE` ? `true` : `false`

#### Type parameters

| Name       |
| :--------- |
| `VALUE`    |
| `EXPECTED` |

#### Defined in

[src/types.ts:26](https://github.com/jonathanchowjh/ts-utils/blob/b98ab75/src/types.ts#L26)

---

### ExpectFalse

Ƭ **ExpectFalse**<`T`\>: `T`

#### Type parameters

| Name | Type            |
| :--- | :-------------- |
| `T`  | extends `false` |

#### Defined in

[src/types.ts:5](https://github.com/jonathanchowjh/ts-utils/blob/b98ab75/src/types.ts#L5)

---

### ExpectTrue

Ƭ **ExpectTrue**<`T`\>: `T`

#### Type parameters

| Name | Type           |
| :--- | :------------- |
| `T`  | extends `true` |

#### Defined in

[src/types.ts:4](https://github.com/jonathanchowjh/ts-utils/blob/b98ab75/src/types.ts#L4)

---

### ExpectValidArgs

Ƭ **ExpectValidArgs**<`FUNC`, `ARGS`\>: `ARGS` extends `Parameters`<`FUNC`\> ? `true` : `false`

#### Type parameters

| Name   | Type                                  |
| :----- | :------------------------------------ |
| `FUNC` | extends (...`args`: `any`[]) => `any` |
| `ARGS` | extends `any`[]                       |

#### Defined in

[src/types.ts:29](https://github.com/jonathanchowjh/ts-utils/blob/b98ab75/src/types.ts#L29)

---

### IsAny

Ƭ **IsAny**<`T`\>: `0` extends `1` & `T` ? `true` : `false`

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Defined in

[src/types.ts:16](https://github.com/jonathanchowjh/ts-utils/blob/b98ab75/src/types.ts#L16)

---

### IsFalse

Ƭ **IsFalse**<`T`\>: `T`

#### Type parameters

| Name | Type            |
| :--- | :-------------- |
| `T`  | extends `false` |

#### Defined in

[src/types.ts:7](https://github.com/jonathanchowjh/ts-utils/blob/b98ab75/src/types.ts#L7)

---

### IsTrue

Ƭ **IsTrue**<`T`\>: `T`

#### Type parameters

| Name | Type           |
| :--- | :------------- |
| `T`  | extends `true` |

#### Defined in

[src/types.ts:6](https://github.com/jonathanchowjh/ts-utils/blob/b98ab75/src/types.ts#L6)

---

### MergeInsertions

Ƭ **MergeInsertions**<`T`\>: `T` extends `object` ? { [K in keyof T]: MergeInsertions<T[K]\> } : `T`

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Defined in

[src/types.ts:20](https://github.com/jonathanchowjh/ts-utils/blob/b98ab75/src/types.ts#L20)

---

### NotAny

Ƭ **NotAny**<`T`\>: `true` extends [`IsAny`](types.md#isany)<`T`\> ? `false` : `true`

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Defined in

[src/types.ts:17](https://github.com/jonathanchowjh/ts-utils/blob/b98ab75/src/types.ts#L17)

---

### NotEqual

Ƭ **NotEqual**<`X`, `Y`\>: `true` extends [`Equal`](types.md#equal)<`X`, `Y`\> ? `false` : `true`

#### Type parameters

| Name |
| :--- |
| `X`  |
| `Y`  |

#### Defined in

[src/types.ts:14](https://github.com/jonathanchowjh/ts-utils/blob/b98ab75/src/types.ts#L14)

---

### UnionToIntersection

Ƭ **UnionToIntersection**<`U`\>: `U` extends `any` ? (`k`: `U`) => `void` : `never` extends (`k`: infer I) => `void` ? `I` : `never`

#### Type parameters

| Name |
| :--- |
| `U`  |

#### Defined in

[src/types.ts:34](https://github.com/jonathanchowjh/ts-utils/blob/b98ab75/src/types.ts#L34)

## Functions

### doNotExecute

▸ **doNotExecute**(`func`): `void`

#### Parameters

| Name   | Type        |
| :----- | :---------- |
| `func` | () => `any` |

#### Returns

`void`

#### Defined in

[src/types.ts:40](https://github.com/jonathanchowjh/ts-utils/blob/b98ab75/src/types.ts#L40)

[ts-methods](../README.md) / [Modules](../modules.md) / fs

# Module: fs

## Table of contents

### Type Aliases

- [Nested](fs.md#nested)
- [NestedArray](fs.md#nestedarray)
- [NestedObject](fs.md#nestedobject)

### Variables

- [CONSTANTS](fs.md#constants)

### Functions

- [flatten](fs.md#flatten)
- [pathCreate](fs.md#pathcreate)
- [pathExists](fs.md#pathexists)
- [pathFind](fs.md#pathfind)
- [pathIterate](fs.md#pathiterate)
- [read](fs.md#read)
- [readJson](fs.md#readjson)
- [readJson2D](fs.md#readjson2d)
- [root](fs.md#root)
- [rootDefault](fs.md#rootdefault)
- [rootFromPath](fs.md#rootfrompath)
- [walk](fs.md#walk)
- [write](fs.md#write)
- [writeJson](fs.md#writejson)
- [writeJson2D](fs.md#writejson2d)

## Type Aliases

### Nested

Ƭ **Nested**<`T`\>: (`T` \| [`Nested`](fs.md#nested)<`T`\>)[]

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Defined in

[src/fs.ts:6](https://github.com/jonathanchowjh/ts-utils/blob/442e9ac/src/fs.ts#L6)

---

### NestedArray

Ƭ **NestedArray**: ([`NestedArray`](fs.md#nestedarray) \| `string` \| `number`)[]

#### Defined in

[src/fs.ts:7](https://github.com/jonathanchowjh/ts-utils/blob/442e9ac/src/fs.ts#L7)

---

### NestedObject

Ƭ **NestedObject**: `Object`

#### Index signature

▪ [k: `string`]: [`NestedObject`](fs.md#nestedobject) \| ([`NestedObject`](fs.md#nestedobject) \| [`NestedArray`](fs.md#nestedarray))[] \| `string` \| `number`

#### Defined in

[src/fs.ts:8](https://github.com/jonathanchowjh/ts-utils/blob/442e9ac/src/fs.ts#L8)

## Variables

### CONSTANTS

• `Const` **CONSTANTS**: `"constants.json"`

#### Defined in

[src/fs.ts:5](https://github.com/jonathanchowjh/ts-utils/blob/442e9ac/src/fs.ts#L5)

## Functions

### flatten

▸ **flatten**<`T`\>(`arr`): `FlatArray`<`T`, `0` \| `2` \| `1` \| `-1` \| `3` \| `4` \| `5` \| `6` \| `7` \| `8` \| `9` \| `10` \| `11` \| `12` \| `13` \| `14` \| `15` \| `16` \| `17` \| `18` \| `19` \| `20`\>[]

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name  | Type  |
| :---- | :---- |
| `arr` | `T`[] |

#### Returns

`FlatArray`<`T`, `0` \| `2` \| `1` \| `-1` \| `3` \| `4` \| `5` \| `6` \| `7` \| `8` \| `9` \| `10` \| `11` \| `12` \| `13` \| `14` \| `15` \| `16` \| `17` \| `18` \| `19` \| `20`\>[]

#### Defined in

[src/fs.ts:196](https://github.com/jonathanchowjh/ts-utils/blob/442e9ac/src/fs.ts#L196)

---

### pathCreate

▸ **pathCreate**(`loc`, `file`): `Promise`<`void`\>

#### Parameters

| Name   | Type      |
| :----- | :-------- |
| `loc`  | `string`  |
| `file` | `boolean` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/fs.ts:129](https://github.com/jonathanchowjh/ts-utils/blob/442e9ac/src/fs.ts#L129)

---

### pathExists

▸ **pathExists**(`loc`): `Promise`<`boolean`\>

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `loc` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/fs.ts:144](https://github.com/jonathanchowjh/ts-utils/blob/442e9ac/src/fs.ts#L144)

---

### pathFind

▸ **pathFind**(`dir`, `file`): `Promise`<`string`\>

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `dir`  | `string` |
| `file` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/fs.ts:185](https://github.com/jonathanchowjh/ts-utils/blob/442e9ac/src/fs.ts#L185)

---

### pathIterate

▸ **pathIterate**<`R`\>(`loc`, `acc`, `callback`): `Promise`<`null` \| `R`\>

#### Type parameters

| Name |
| :--- |
| `R`  |

#### Parameters

| Name       | Type                                                                           |
| :--------- | :----------------------------------------------------------------------------- |
| `loc`      | `string`                                                                       |
| `acc`      | `boolean`                                                                      |
| `callback` | (`p`: `string`, `c`: `string`, `last`: `boolean`) => `Promise`<`null` \| `R`\> |

#### Returns

`Promise`<`null` \| `R`\>

#### Defined in

[src/fs.ts:157](https://github.com/jonathanchowjh/ts-utils/blob/442e9ac/src/fs.ts#L157)

---

### read

▸ **read**(`fullLoc`): `Promise`<`string`\>

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `fullLoc` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/fs.ts:80](https://github.com/jonathanchowjh/ts-utils/blob/442e9ac/src/fs.ts#L80)

---

### readJson

▸ **readJson**<`T`\>(`fullLoc`): `Promise`<`T`\>

#### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends `object` |

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `fullLoc` | `string` |

#### Returns

`Promise`<`T`\>

#### Defined in

[src/fs.ts:54](https://github.com/jonathanchowjh/ts-utils/blob/442e9ac/src/fs.ts#L54)

---

### readJson2D

▸ **readJson2D**(`fullLoc`, `key1?`, `key2?`): `Promise`<`undefined` \| `string` \| { `[k: string]`: `any`; }\>

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `fullLoc` | `string` |
| `key1?`   | `string` |
| `key2?`   | `string` |

#### Returns

`Promise`<`undefined` \| `string` \| { `[k: string]`: `any`; }\>

#### Defined in

[src/fs.ts:17](https://github.com/jonathanchowjh/ts-utils/blob/442e9ac/src/fs.ts#L17)

---

### root

▸ **root**(`loc`): `Promise`<`string`\>

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `loc` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/fs.ts:106](https://github.com/jonathanchowjh/ts-utils/blob/442e9ac/src/fs.ts#L106)

---

### rootDefault

▸ **rootDefault**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[src/fs.ts:110](https://github.com/jonathanchowjh/ts-utils/blob/442e9ac/src/fs.ts#L110)

---

### rootFromPath

▸ **rootFromPath**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[src/fs.ts:116](https://github.com/jonathanchowjh/ts-utils/blob/442e9ac/src/fs.ts#L116)

---

### walk

▸ **walk**(`dir`): `Promise`<[`Nested`](fs.md#nested)<`string`\>\>

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `dir` | `string` |

#### Returns

`Promise`<[`Nested`](fs.md#nested)<`string`\>\>

#### Defined in

[src/fs.ts:199](https://github.com/jonathanchowjh/ts-utils/blob/442e9ac/src/fs.ts#L199)

---

### write

▸ **write**(`fullLoc`, `data`): `Promise`<`boolean`\>

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `fullLoc` | `string` |
| `data`    | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/fs.ts:93](https://github.com/jonathanchowjh/ts-utils/blob/442e9ac/src/fs.ts#L93)

---

### writeJson

▸ **writeJson**<`T`\>(`fullLoc`, `data`): `Promise`<`boolean`\>

#### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends `object` |

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `fullLoc` | `string` |
| `data`    | `T`      |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/fs.ts:68](https://github.com/jonathanchowjh/ts-utils/blob/442e9ac/src/fs.ts#L68)

---

### writeJson2D

▸ **writeJson2D**(`fullLoc`, `key1`, `key2`, `value`): `Promise`<`boolean`\>

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `fullLoc` | `string` |
| `key1`    | `string` |
| `key2`    | `string` |
| `value`   | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/fs.ts:34](https://github.com/jonathanchowjh/ts-utils/blob/442e9ac/src/fs.ts#L34)

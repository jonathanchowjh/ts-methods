[ts-fractal](../README.md) / [Modules](../modules.md) / repl

# Module: repl

## Table of contents

### Classes

- [REPL](../classes/repl.REPL.md)

### Functions

- [readLine](repl.md#readline)
- [readLineSelect](repl.md#readlineselect)

## Functions

### readLine

▸ **readLine**(`question`): `Promise`<`string`\>

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `question` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/repl.ts:26](https://github.com/jonathanchowjh/ts-utils/blob/3fa4432/src/repl.ts#L26)

---

### readLineSelect

▸ **readLineSelect**(`question`, `select`): `Promise`<`string`\>

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `question` | `string`   |
| `select`   | `string`[] |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/repl.ts:5](https://github.com/jonathanchowjh/ts-utils/blob/3fa4432/src/repl.ts#L5)

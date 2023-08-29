[ts-tools](../README.md) / [Modules](../modules.md) / [repl](../modules/repl.md) / REPL

# Class: REPL

[repl](../modules/repl.md).REPL

Usage:
class Chat extends REPL {
constructor() {
super("Enter Text: ", true)
}

override default (cmds: string[]): void {
console.log(cmds)
}

edit (cmds: string[]): void {
if (cmds.length < 3) return;
const second = cmds[1]
const third = cmds[2]
if (second != "question") return;
this.question = third
}
}
new Chat()

## Table of contents

### Constructors

- [constructor](repl.REPL.md#constructor)

### Properties

- [noError](repl.REPL.md#noerror)
- [question](repl.REPL.md#question)

### Methods

- [default](repl.REPL.md#default)
- [run](repl.REPL.md#run)

## Constructors

### constructor

• **new REPL**(`question?`, `noError?`)

#### Parameters

| Name       | Type      | Default value |
| :--------- | :-------- | :------------ |
| `question` | `string`  | `""`          |
| `noError`  | `boolean` | `false`       |

#### Defined in

[src/repl.ts:65](https://github.com/jonathanchowjh/ts-utils/blob/792472b/src/repl.ts#L65)

## Properties

### noError

• **noError**: `boolean` = `false`

#### Defined in

[src/repl.ts:63](https://github.com/jonathanchowjh/ts-utils/blob/792472b/src/repl.ts#L63)

---

### question

• **question**: `string` = `"> "`

#### Defined in

[src/repl.ts:61](https://github.com/jonathanchowjh/ts-utils/blob/792472b/src/repl.ts#L61)

## Methods

### default

▸ **default**(`cmds`): `void`

#### Parameters

| Name   | Type       |
| :----- | :--------- |
| `cmds` | `string`[] |

#### Returns

`void`

#### Defined in

[src/repl.ts:99](https://github.com/jonathanchowjh/ts-utils/blob/792472b/src/repl.ts#L99)

---

### run

▸ **run**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/repl.ts:71](https://github.com/jonathanchowjh/ts-utils/blob/792472b/src/repl.ts#L71)

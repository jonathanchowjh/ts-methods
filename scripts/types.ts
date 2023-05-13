import {
  Expect,
  ExpectFalse,
  Equal,
  NotEqual,
  IsAny,
  NotAny,
  Debug,
  MergeInsertions,
  Alike,
  ExpectExtends,
  ExpectValidArgs,
  UnionToIntersection,
  doNotExecute,
} from "../src/types";

/* eslint-disable */

export const typesMain = async () => {
  doNotExecute(async () => {
    const anyType: any = 0;
    const numType: number = 0;
    const strType: string = "";
    type Person = { name: string; age: number };
    type Person1 = { name: string; age: number };
    type Address = { name: string; age: number; street: string };
    const addFunc = (n1: number, n2: number): number => n1 + n2;
    const validArgs: [number, number] = [3, 9];
    const invalidArgs: [string, number] = ["John", 9];

    // @ts-expect-error
    type test1 = [Expect<Equal<1, 2>>];
    type test2 = [Expect<Equal<1, 1>>];
    type test3 = [Expect<NotEqual<1, 2>>];
    type test4 = [Expect<IsAny<typeof anyType>>];
    type test5 = [Expect<NotAny<typeof numType>>];
    // @ts-expect-error
    const test6: Debug<Person> = { name: "John Doe" };
    const test7: MergeInsertions<Person & Address> = {
      name: "John Doe",
      age: 9,
      street: "9",
    };
    type test8 = [Expect<Alike<Person, Person1>>];
    type test9 = [Expect<ExpectExtends<Person, Address>>];
    type test10 = [Expect<ExpectValidArgs<typeof addFunc, typeof validArgs>>];
    type test11 = [
      ExpectFalse<ExpectValidArgs<typeof addFunc, typeof invalidArgs>>
    ];
    type Union = string | number | boolean;
    type Intersection = UnionToIntersection<Union>; // string & number & boolean
  });
};

import {
  Expect,
  Equal,
  NotEqual,
  IsAny,
  NotAny,
  doNotExecute,
} from "../src/types";

/* eslint-disable */

const main = async () => {
  doNotExecute(async () => {
    const anyType: any = 0;
    const numType: number = 0;
    const strType: string = "";
    // @ts-expect-error
    type test1 = [Expect<Equal<1, 2>>];
    type test2 = [Expect<Equal<1, 1>>];
    type test3 = [Expect<NotEqual<1, 2>>];
    type test4 = [Expect<IsAny<typeof anyType>>];
    type test5 = [Expect<NotAny<typeof numType>>];
  });
};

main()
  .then((val) => console.log(val))
  .catch((err) => console.log(err));

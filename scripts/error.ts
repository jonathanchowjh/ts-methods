import {
  UtilsError,
  DefaultError,
  stackTrace,
  isErrorWithMessage,
  toErrorWithMessage,
  catchError,
} from "../src/error";

/* eslint-disable */

const testTrace = () => stackTrace();
const throwUtilsError = (msg?: string) => {
  const message = msg ?? "sample error";
  throw new UtilsError(message);
};
const throwDefaultError = (msg: string) => {
  const message = msg ?? "sample error";
  throw new DefaultError(message);
};
const addFunc = (a: number, b: number) => a + b;

const main = async () => {
  console.log(testTrace());
  await catchError(() => throwUtilsError("error1"));
  await catchError(() => throwDefaultError("error2"));
  try {
    throwUtilsError();
  } catch (error: unknown) {
    if (!isErrorWithMessage(error)) throw new Error("err");
    console.log(error.message);
  }
  try {
    throw 328732;
  } catch (err: unknown) {
    console.log(toErrorWithMessage(err).message);
  }
  try {
    throw new DefaultError("test throw");
  } catch (err: unknown) {
    console.log(toErrorWithMessage(err).message);
  }
  console.log(await catchError(() => addFunc(5, 2)));
};

main()
  .then((val) => console.log(val))
  .catch((err) => console.error(err));

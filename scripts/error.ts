import {
  UtilsError,
  DefaultError,
  stackTrace,
  isError,
  toError,
  catchError,
} from "../src/error";

/* eslint-disable */

const testTrace = () => stackTrace();
const throwUtilsError = (msg?: string): void => {
  const message = msg ?? "sample error";
  throw new UtilsError(message);
};
const throwDefaultError = (msg: string): void => {
  const message = msg ?? "sample error";
  throw new DefaultError(message);
};
const addFunc = (a: number, b: number) => a + b;

const main = async () => {
  console.log(testTrace());
  await catchError<ReturnType<typeof throwUtilsError>>(() =>
    throwUtilsError("error1")
  );
  await catchError<ReturnType<typeof throwDefaultError>>(() =>
    throwDefaultError("error2")
  );
  try {
    throwUtilsError();
  } catch (error: unknown) {
    if (!isError(error)) throw new Error("err");
    console.log(error.message);
  }
  try {
    throw 328732;
  } catch (err: unknown) {
    console.log(toError(err).message);
  }
  try {
    throw new DefaultError("test throw");
  } catch (err: unknown) {
    console.log(toError(err).message);
  }
  console.log(
    await catchError<ReturnType<typeof addFunc>>(() => addFunc(5, 2))
  );
};

main()
  .then((val) => console.log(val))
  .catch((err) => console.error(err));

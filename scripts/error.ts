import {
  UtilsError,
  DefaultError,
  stackTrace,
  isError,
  toError,
  catchError,
} from "../src/error";

/* eslint-disable */

// Helper Functions
const testTrace = () => stackTrace();
const addFunc = (a: number, b: number) => a + b;
const throwUtilsError = (msg?: string): void => {
  const message = msg ?? "sample error";
  throw new UtilsError(message);
};
const throwDefaultError = (msg: string): void => {
  const message = msg ?? "sample error";
  throw new DefaultError(message);
};

const main = async () => {
  // Stack Trace
  console.log(testTrace());

  // Catch Thrown Error
  await catchError<ReturnType<typeof throwUtilsError>>(() =>
    throwUtilsError("error1")
  );
  await catchError<ReturnType<typeof throwDefaultError>>(() =>
    throwDefaultError("error2")
  );
  console.log(
    await catchError<ReturnType<typeof addFunc>>(() => addFunc(5, 2))
  );

  // Catch Utils Error
  try {
    throwUtilsError();
  } catch (error: unknown) {
    if (!isError(error)) throw new Error("err");
    console.log(error.message);
  }

  // To Error
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
};

main()
  .then((val) => console.log(val))
  .catch((err) => console.error(err));

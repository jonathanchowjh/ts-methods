/* eslint-disable max-classes-per-file */

// Usage: throw new UtilsError("err msg")
export class UtilsError extends Error {
  constructor(error: string, errorSource?: string) {
    const name = `${errorSource ?? "ts-methods"}::${stackTrace()[1]}::${error}`;
    super(name);
    Object.setPrototypeOf(this, UtilsError.prototype);
  }
}

// Usage: throw new DefaultError("err msg")
export class DefaultError extends Error {
  constructor(msg: string) {
    super(msg);
    Object.setPrototypeOf(this, DefaultError.prototype);
  }
}

// Usage: stackTrace() => string[]
export const stackTrace = (
  noFilter?: boolean,
  noDataParsing?: boolean,
  noFilterTrace?: boolean
): string[] => {
  const obj = { stack: "" };
  Error.captureStackTrace(obj, stackTrace);
  if (noFilter) return obj.stack.split("\n");
  return obj.stack
    .split("\n")
    .splice(1)
    .map((val: string) => {
      // remove parenthesis and formatted spacing
      if (noDataParsing) return val;
      return val.replace("    at ", "").replace(/\s*\(.*?\)\s*/g, "");
    })
    .filter((val: string) => {
      // filter stacktrace using keys
      if (noFilterTrace) return true;
      if (val === "" || val === undefined || val === null) return false;
      const words = ["Module.", "Object.", "Function.", "file://"];
      return !new RegExp(words.join("|")).test(val);
    });
};

// Usage: isErrorWithMessage(err) => error is Error
export const isErrorWithMessage = (error: unknown): error is Error =>
  typeof error === "object" &&
  error !== null &&
  "message" in error &&
  typeof (error as Record<string, unknown>).message === "string";

// Usage: toErrorWithMessage(err) => Error
export const toErrorWithMessage = (maybeError: unknown): Error => {
  if (isErrorWithMessage(maybeError)) return maybeError;
  try {
    return new UtilsError(JSON.stringify(maybeError));
  } catch {
    return new UtilsError(String(maybeError));
  }
};

// Usage: await catchError<ReturnType<func1>>(() => func1(a, b))
export const catchError = async <R>(
  callback: () => R,
  verbose?: boolean
): Promise<R | null> => {
  try {
    return callback();
  } catch (error: unknown) {
    if (!isErrorWithMessage(error)) {
      throw new UtilsError("Invalid Error Thrown");
    }
    // eslint-disable-next-line no-console
    console.log(`ERROR CAUGHT => ${error.message}`);
    if (verbose) {
      if (error.stack) {
        // eslint-disable-next-line no-console
        console.log(error.stack);
      }
    }
    // RETURNS null when error is caught
    return null;
  }
};

import fs from "fs";
import path from "path";
import { UtilsError, catchError } from "./error";

export const CONSTANTS = "constants.json";
export type Nested<T> = Array<T | Nested<T>>;
export type NestedArray = Array<NestedArray | string | number>;
export type NestedObject = {
  [k: string]:
    | NestedObject
    | Array<NestedObject | NestedArray>
    | string
    | number;
};

// Usage: await readJson2D(await root("constants.json"), "key1", "key2") => "value"
export const readJson2D = async (
  fullLoc: string,
  key1?: string,
  key2?: string
): Promise<{ [k: string]: any } | string | undefined> => {
  if (!(await pathExists(fullLoc))) throw new UtilsError("Invalid Path");
  const object = await readJson(fullLoc);
  if (object === undefined) return undefined;
  if (key1 === undefined) return object;
  if (!Object.keys(object).includes(key1)) return object;
  const typeVal = key1 as keyof typeof object;
  if (key2 === undefined) return object[typeVal];
  if (object[typeVal]) return object[typeVal][key2];
  return undefined;
};

// Usage: await writeJson2D(await root("constants.json"), "key1", "key2", "value")
export const writeJson2D = async (
  fullLoc: string,
  key1: string,
  key2: string,
  value: string
): Promise<boolean> => {
  if (!(await pathExists(fullLoc))) throw new UtilsError("Invalid Path");
  let object = await readJson2D(fullLoc, undefined, undefined);
  if (object === undefined) object = {};
  if (typeof object === "string") object = {};
  if (object[key1] === undefined) object[key1] = {};
  if (value === "\\DELETE") {
    delete object[key1][key2];
  } else {
    object[key1][key2] = value;
  }
  return writeJson(fullLoc, object);
};

// Usage: await readJson(await root("constants.json")) => object
export const readJson = async <T extends object>(
  fullLoc: string
): Promise<T> => {
  const raw = await read(fullLoc);
  let ret: unknown;
  try {
    ret = JSON.parse(raw);
  } catch (err: unknown) {
    throw new UtilsError("JSON parsing Error");
  }
  return ret as T;
};

// Usage: await writeJson(await root("constants.json"), {}) => boolean
export const writeJson = async <T extends object>(
  fullLoc: string,
  data: T
): Promise<boolean> => {
  const ret = await catchError<ReturnType<typeof JSON.stringify>>(() =>
    JSON.stringify(data)
  );
  if (ret == null && typeof ret === "object") return false;
  return write(fullLoc, ret);
};

// Usage: await read(await root("constants.json")) => string
export const read = async (fullLoc: string): Promise<string> => {
  if (!(await pathExists(fullLoc)))
    throw new UtilsError("file path doesn't exist");
  const ret = await catchError<ReturnType<typeof fs.promises.readFile>>(
    async () => fs.promises.readFile(fullLoc)
  );
  if (ret == null && typeof ret == "object") {
    throw new UtilsError("readFile threw error");
  }
  return ret.toString();
};

// Usage: await write(await root("constants.json"), JSON.stringify(data)) => boolean
export const write = async (
  fullLoc: string,
  data: string
): Promise<boolean> => {
  if (!(await pathExists(fullLoc))) return false;
  const ret = await catchError<ReturnType<typeof fs.promises.writeFile>>(
    async () => fs.promises.writeFile(fullLoc, data)
  );
  if (ret == null && typeof ret == "object") return false;
  return true;
};

// Usage: await root("constants.json") => string
export const root = async (loc: string) =>
  path.resolve(await rootDefault(), loc);

// Usage: await rootDefault() => string
export const rootDefault = async (): Promise<string> =>
  __dirname.includes("node_modules")
    ? __dirname.split("node_modules")[0]
    : rootFromPath();

// Usage: await rootFromPath() => string
export const rootFromPath = async (): Promise<string> => {
  const iter = await pathIterate<string>(__filename, false, async (p, c) => {
    if (p === "" && c === "") throw new UtilsError("No NodeJS root found");
    const files = await fs.promises.readdir(p);
    if (files.includes("package.json")) return p;
    return null;
  });
  if (iter == null && typeof iter == "object")
    throw new UtilsError("Unexpected null returned");
  return iter;
};

// Usage: await pathCreate(await root("constants.json"), true)
export const pathCreate = async (loc: string, file: boolean): Promise<void> => {
  await pathIterate<void>(loc, true, async (p, c, l) => {
    if (p === "" && c === "") return;
    const files = await fs.promises.readdir(p);
    if (files.includes(c)) return null;
    if (l && file) {
      await fs.promises.open(path.resolve(p, c), "w");
      return null;
    }
    await fs.promises.mkdir(path.resolve(p, c));
    return null;
  });
};

// Usage: await pathExists(await root("constants.json")) => boolean
export const pathExists = async (loc: string): Promise<boolean> => {
  const iter = await pathIterate<boolean>(loc, true, async (p, c) => {
    if (p === "" && c === "") return true;
    const files = await fs.promises.readdir(p);
    if (files.includes(c)) return null;
    return false;
  });
  if (iter == null && typeof iter == "object")
    throw new UtilsError("Unexpected null returned");
  return iter;
};

// await pathIterate(await rootDefault(), true, async (p, c) => console.log(p, c));
export const pathIterate = async <R>(
  loc: string,
  acc: boolean,
  // eslint-disable-next-line no-unused-vars
  callback: (p: string, c: string, last: boolean) => Promise<R | null>
): Promise<R | null> => {
  const pathSplit = (l: string): string[] => {
    const arr = l.split("/");
    return arr.filter((val) => val !== "");
  };
  const locSplit = pathSplit(loc);
  let start = acc ? 0 : locSplit.length - 1;
  const end = acc ? locSplit.length : 0;
  while (acc ? start < end : start >= end) {
    const prevLoc = `/${locSplit.slice(0, start).join("/")}`;
    const currLoc = locSplit[start];
    const cbRet = await callback(
      prevLoc,
      currLoc,
      acc ? !(start + 1 < end) : !(start + 1 >= end)
    );
    if (cbRet != null) return cbRet;
    acc ? start++ : start--;
  }
  return callback("", "", true);
};

// Usage: await pathFind(await rootDefault(), "constants.json") => string
export const pathFind = async (dir: string, file: string): Promise<string> => {
  const filesInDir = await walk(dir);
  const files = flatten<string>(filesInDir as any[]);
  for (let i = 0; i < files.length; i++) {
    const temp = files[i].split("/");
    if (temp[temp.length - 1] === file) return files[i];
  }
  return "";
};

// Usage: await flatten<string>(strArr as any[]) => string[]
export const flatten = <T>(arr: T[]) => arr.flat(Infinity);

// Usage: await walk(await rootDefault()) => string[]
export const walk = async (dir: string): Promise<Nested<string>> => {
  const files = await fs.promises.readdir(dir);
  const filesInDepth: Nested<string> = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(dir, file);
      const stats = await fs.promises.stat(filePath);
      if (stats.isDirectory()) return walk(filePath);
      if (stats.isFile()) return filePath;
      throw new UtilsError("invalid-file-type");
    })
  );
  return filesInDepth;
};

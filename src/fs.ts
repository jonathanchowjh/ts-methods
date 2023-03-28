import fs from "fs";
import path from "path";
import { UtilsError, catchError } from "./error";

export const readJson = async <T extends object>(
  fullLoc: string
): Promise<T> => {
  const raw = await read(fullLoc);
  const ret = await catchError<ReturnType<typeof JSON.parse>>(() =>
    JSON.parse(raw)
  );
  if (ret == null && typeof ret === "object") {
    throw new UtilsError("JSON parsing Error");
  }
  return ret;
};

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

export const root = async (loc: string) =>
  path.resolve(await rootDefault(), loc);

export const rootDefault = async (): Promise<string> =>
  __dirname.includes("node_modules")
    ? __dirname.split("node_modules")[0]
    : rootFromPath();

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

export const pathFind = async (dir: string, file: string) => {
  const filesInDir = await walk(dir);
  const files = flatten<string>(filesInDir as any[]);
  for (let i = 0; i < files.length; i++) {
    const temp = files[i].split("/");
    if (temp[temp.length - 1] === file) return files[i];
  }
  return "";
};

export const flatten = <T>(arr: T[]) => arr.flat(Infinity);

export type Nested<T> = Array<T | Nested<T>>;

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

/* eslint-disable */

export class FsHelper {
  readCsv = async (loc: string): Promise<string[][]> => {
    return [];
  };

  writeCsv = async <T>(loc: string, arr: T[][]): Promise<void> => {};

  read = async (loc: string): Promise<string> => {
    return "";
  };

  write = async (loc: string, data: string): Promise<void> => {
    await fs.promises.writeFile(loc, data);
  };

  root = (): string =>
    __dirname.includes("node_modules")
      ? __dirname.split("node_modules")[0]
      : path.resolve(__dirname, "../");

  createFile = async (
    root: string,
    location: string,
    isAllFolders?: boolean
  ): Promise<void> => {
    if (!root.includes(this.root())) throw new UtilsError("path-not-in-root");
    const loc = location.split("/");
    const lastFolderFile = loc.length === 1;
    const filePath = path.resolve(root, loc[0]);
    const files = await fs.promises.readdir(path.resolve(root));
    if (!files.includes(loc[0])) {
      if (!isAllFolders && lastFolderFile) {
        await fs.promises.open(filePath, "w");
      } else {
        await fs.promises.mkdir(filePath);
        if (!lastFolderFile) {
          await this.createFile(filePath, loc.slice(1).join("/"), isAllFolders);
        }
      }
    } else {
      if (lastFolderFile) return;
      await this.createFile(filePath, loc.slice(1).join("/"), isAllFolders);
    }
  };

  walk = async (dir: string): Promise<string[]> => {
    let files = await fs.promises.readdir(dir);
    files = (await Promise.all(
      files.map(async (file) => {
        const filePath = path.join(dir, file);
        const stats = await fs.promises.stat(filePath);
        if (stats.isDirectory()) return this.walk(filePath);
        if (stats.isFile()) return filePath;
        throw new UtilsError("invalid-file-type");
      })
    )) as any[];
    return files.filter((val) => {
      if (val === undefined) return false;
      return true;
    }) as string[];
  };
}

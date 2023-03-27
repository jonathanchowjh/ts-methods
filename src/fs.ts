import fs from "fs";
import path from "path";
import { UtilsError } from "./error";
import { safeExecute } from "./os";

export const root = async (): Promise<string> =>
  __dirname.includes("node_modules")
    ? __dirname.split("node_modules")[0]
    : packageRoot();

export const packageRoot = async (): Promise<string> => {
  const currPath = __dirname.split("/");
  for (let i = currPath.length - 1; i >= 0; i--) {
    const tempPath = currPath.slice(0, i + 1).join("/");
    const val = await safeExecute(`cd ${tempPath} && ls`);
    if (val.includes("package.json")) {
      return currPath.slice(0, i + 1).join("/");
    }
  }
  throw new UtilsError("Pakage Root Not Found");
};

type Nested<T> = Array<T | Nested<T>>;

export const walk = async (
  dir: string,
  flatten?: boolean
): Promise<Nested<string>> => {
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
  if (!flatten) return filesInDepth;
  const flattenedFilesInDepth: string[] = (filesInDepth as any[]).flat(
    Infinity
  );
  return flattenedFilesInDepth;
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

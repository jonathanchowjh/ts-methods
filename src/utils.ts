import fs from "fs";
import path from "path";
import readline from "readline";

export const JSON_LOCATION = process.env.JSON_LOCATION || "ts-methods.json";
export const pathResolve = path.resolve;

/* eslint-disable no-case-declarations */
/* eslint-disable no-useless-escape */

/**
 * readline question from terminal with selection
 * @param {string} question question prompt before waiting for user input
 * @param {string[]} select question prompt before waiting for user input
 * @returns {Promise<string>} Object or string, depending on input
 * @example
 * ```ts
 * const name: string = await readLineSelect("What is your name: ", ["Alice", "Bryan", "Sam"]);
 * ```
 */
export const readLineSelect = async (
  question: string,
  select: string[]
): Promise<string> => {
  const options = select.map((option, idx) => `${idx}. ${option}`);
  // eslint-disable-next-line
  console.log(options.join("\n"));
  const input = await readLine(question);
  const idx = parseInt(input, 10);
  if (Number.isNaN(idx)) {
    if (!select.includes(input)) throw ErrorDefault("Invalid User Input");
    return input;
  }
  if (idx >= select.length || idx < 0) throw ErrorDefault("Invalid User Input");
  return select[idx];
};

/**
 * readline question from terminal
 * @param {string} question question prompt before waiting for user input
 * @returns {Promise<string>} Object or string, depending on input
 * @example
 * ```ts
 * const name: string = await readLine("What is your name: ");
 * ```
 */
export const readLine = async (question: string): Promise<string> => {
  let answer: string = "";
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  answer = (await new Promise((resolve) => {
    rl.question(question, resolve);
  })) as string;
  rl.close();
  return answer;
};

// ===================================
// READ WRITE JSON
// ===================================

/**
 * Parsed JSON given file (absolute path / relative path to root)
 * @param {string} file? (Optional) file path to read
 * @returns {Promise<{ [ k: string ]: any }>} JSON Object
 * @example
 * ```ts
 * const obj: { [k: string]: any } = await jsonReadFull();
 * ```
 */
export const jsonReadFull = async (
  file?: string
): Promise<{ [k: string]: any }> => {
  const fileName = file || JSON_LOCATION;
  await filePathExists(filePathRoot(), fileName);
  const rawdata = await fs.promises.readFile(
    path.resolve(filePathRoot(), fileName)
  );
  const data = JSON.parse(rawdata.toString());
  return data;
};

/**
 * This saves to json file full
 * @param {string} obj Object to save
 * @param {string} file (Optional) File that data is saved in
 * @returns {Promise<void>} Promise to finish writing to file
 * @example
 * ```ts
 * await jsonSaveFull(
 *    { addresses: { key: "value" } }
 * );
 * ```
 */

export const jsonSaveFull = async (
  obj: { [k: string]: { [j: string]: string } },
  file?: string
): Promise<void> => {
  const fileName = file || JSON_LOCATION;
  await filePathExists(filePathRoot(), fileName);
  await fs.promises.writeFile(
    path.resolve(filePathRoot(), fileName),
    JSON.stringify(obj)
  );
};

/**
 * This reads json file given type and name
 * @param {string} type (Optional) Type of saved data (eg. addresses)
 * @param {string} name (Optional) Name of saved data (eg. goerli-utility)
 * @param {string} file (Optional) File that data is saved in
 * @returns {Promise<{ [ k: string ]: any } | string | undefined>} Object or string, depending on input
 * @example
 * ```ts
 * const val: string = await jsonRead('addresses', 'goerli-utility') as string;
 * ```
 */
export const jsonRead = async (
  type?: string,
  name?: string,
  file?: string
): Promise<{ [k: string]: any } | string | undefined> => {
  const fileName = file || JSON_LOCATION;
  await filePathExists(filePathRoot(), fileName);
  const rawdata = await fs.promises.readFile(
    path.resolve(filePathRoot(), fileName)
  );
  let object;
  /* eslint-disable no-empty */
  try {
    object = JSON.parse(rawdata.toString());
  } catch (e) {}
  /* eslint-enable no-empty */
  if (object === undefined) return undefined;
  if (type === undefined) return object;
  if (name === undefined) return object[type];
  if (object[type]) return object[type][name];
  return undefined;
};

/**
 * This saves to json file given type, name, and value
 * @param {string} type Type of saved data (eg. addresses)
 * @param {string} name Name of saved data (eg. goerli-utility)
 * @param {string} value Value of saved data (eg. 0x65B165C17a8660e84e4427c4024fcB784577AB05)
 * @param {string} file (Optional) File that data is saved in
 * @returns {Promise<void>} Promise to finish writing to file
 * @example
 * ```ts
 * await jsonSave(
 *    'addresses',
 *    'goerli-utility',
 *    '0x65B165C17a8660e84e4427c4024fcB784577AB05'
 * );
 * ```
 */
export const jsonSave = async (
  type: string,
  name: string,
  value: string,
  file?: string
): Promise<void> => {
  const fileName = file || JSON_LOCATION;
  await filePathExists(filePathRoot(), fileName);
  let object = await jsonRead(undefined, undefined, file);
  if (object === undefined) object = {};
  if (typeof object === "string") object = {};
  if (object[type] === undefined) object[type] = {};
  object[type][name] = value;
  await fs.promises.writeFile(
    path.resolve(filePathRoot(), fileName),
    JSON.stringify(object)
  );
};

// ===================================
// MISC HELPER FUNCTIONS
// ===================================

/**
 * Filter Object by its key value
 * @param {Object} obj Object to filter through
 * @param {string} str Value to filter by
 * @returns {{ [ k: string ]: any }} Filtered Object
 * @example
 * ```ts
 * const obj: { [k: string]: any } = filterKeys(
 *    {
 *      'goerli-utility': ''
 *      'localhost-utility': ''
 *    },
 *    'goerli'
 * );
 * ```
 */
export const filterKeys = (obj: Object, str: string): { [k: string]: any } =>
  Object.fromEntries(Object.entries(obj).filter(([key]) => key.includes(str)));

/**
 * Promise that waits for given number of milliseconds
 * @param {number} ms milliseconds to wait for
 * @returns {Promise<void>} Promise that waits for given number of milliseconds
 * @example
 * ```ts
 * await timeout(1000);
 * ```
 */
export const timeout = (ms: number): Promise<void> =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

/**
 * Returns stack trace of previous function
 * @returns {string} Returns stack trace of previous function
 * @example
 * ```ts
 * const trace: string[] = stackTrace(false, false);
 * ```
 */
export const stackTrace = (
  fullTrace?: boolean,
  withLocation?: boolean
): string[] => {
  const obj: { [k: string]: any } = {};
  Error.captureStackTrace(obj, stackTrace);
  return obj.stack
    .split("\n")
    .splice(1)
    .filter((val: string) => {
      if (fullTrace) return true;
      const words = ["Module.", "Object.", "Function."];
      return !new RegExp(words.join("|")).test(val);
    })
    .map((val: string) => {
      if (withLocation) return val;
      return val.replace("    at ", "").replace(/\s*\(.*?\)\s*/g, "");
    });
};

/**
 * Returns Error based on function name of calling contract
 * @param {string} error message of error
 * @example
 * ```ts
 * throw ErrorDefault("Error Message");
 * ```
 */
export const ErrorDefault = (error: string, errorSource?: string) => {
  const name = `${errorSource ?? "ts-methods"}::${stackTrace()[1]}::${error}`;
  return new UtilsError(name);
};

/**
 * All Errors thrown from Error Default
 * @param {string} msg message of error
 * @example
 * ```ts
 * try {
 *   await filePathCreate(filePathRoot(), `${storageFileName}`, true);
 * } catch (err: unknown) {
 *   if (
 *     !(err instanceof UtilsError) ||
 *     !err.message.includes("ts-methods::filePathCreate")
 *   ) throw ErrorDefault("Rethrown Error: Not expected repo-scripts::filePathCreate error");
 * }
 * ```
 */
export class UtilsError extends Error {
  constructor(msg: string) {
    super(msg);
    Object.setPrototypeOf(this, UtilsError.prototype);
  }
}

/**
 * Getting File Path from Folder
 * @param {string} currentDirPath folder location
 * @param {string} fileName name of file (eg. 'Utility' given Utility.sol)
 * @returns {Promise<string[]>} List of Absolute file paths
 * @example
 * ```ts
 * const filePath: string[] = await filePathRead(
 *    path.resolve(filePathRoot(), 'artifacts'),
 *    'Utility'
 * );
 * ```
 */
export const filePathRead = async (
  currentDirPath: string,
  fileName: string
): Promise<string[]> => {
  const fileList = await filePathWalk(currentDirPath);
  const filteredFileList: string[] = fileList.flat(Infinity).filter((val) => {
    if (val === undefined) return false;
    let fileNameArr = val.split("/");
    fileNameArr = fileNameArr[fileNameArr.length - 1].split(".");
    if (fileNameArr.length < 2) return false;
    if (fileNameArr[0] !== fileName) return false;
    if (fileNameArr[1] === "dbg") return false;
    return true;
  }) as string[];
  return filteredFileList;
};

/**
 * Get all files from a given parent directory
 * @param {string} dir folder location
 * @returns {Promise<string[]>} List of Absolute file paths
 * @example
 * ```ts
 * const filePath: string[] = await filePathWalk(
 *    path.resolve(filePathRoot(), 'artifacts')
 * );
 * ```
 */
export const filePathWalk = async (dir: string): Promise<string[]> => {
  let files = await fs.promises.readdir(dir);
  files = (await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(dir, file);
      const stats = await fs.promises.stat(filePath);
      if (stats.isDirectory()) return filePathWalk(filePath);
      if (stats.isFile()) return filePath;
      throw ErrorDefault("invalid-file-type");
    })
  )) as any[];
  return files.filter((val) => {
    if (val === undefined) return false;
    return true;
  }) as string[];
};

/**
 * Get filePathRoot absolute path
 * @returns {string} filePathRoot absolute path
 * @example
 * ```ts
 * const root: string = filePathRoot();
 * ```
 */
export const filePathRoot = (): string =>
  __dirname.includes("node_modules")
    ? __dirname.split("node_modules")[0]
    : path.resolve(__dirname, "../");

/**
 * Throws Error if folder does not exists
 * @param {string} root root folder (path that has been confirmed to exist)
 * @param {string} location location to check if exist
 * @returns {Promise<void>} Promise to check if path exist
 * @example
 * ```ts
 * await filePathExists(filePathRoot(), 'artifacts/json/constants.json');
 * ```
 */
export const filePathExists = async (
  root: string,
  location: string
): Promise<void> => {
  if (!root.includes(filePathRoot())) throw ErrorDefault("path-not-in-root");
  const loc = location.split("/");
  const isFile = loc.length === 1;
  const filePath = path.resolve(root, loc[0]);
  const files = await fs.promises.readdir(path.resolve(root));
  if (!files.includes(loc[0])) {
    throw ErrorDefault("invalid-location");
  } else {
    if (isFile) return;
    await filePathExists(filePath, loc.slice(1).join("/"));
  }
};

/**
 * Creates dir and file if does not exists
 * @param {string} root root folder (path that has been confirmed to exist)
 * @param {string} location location to check if exist
 * @param {boolean} isAllFolders? (Optional) last item in path is a folder not file
 * @returns {Promise<void>} Promise to create if not exist
 * @example
 * ```ts
 * await filePathCreate(filePathRoot(), 'artifacts/json/constants.json');
 * ```
 */
export const filePathCreate = async (
  root: string,
  location: string,
  isAllFolders?: boolean
): Promise<void> => {
  if (!root.includes(filePathRoot())) throw ErrorDefault("path-not-in-root");
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
        await filePathCreate(filePath, loc.slice(1).join("/"), isAllFolders);
      }
    }
  } else {
    if (lastFolderFile) return;
    await filePathCreate(filePath, loc.slice(1).join("/"), isAllFolders);
  }
};

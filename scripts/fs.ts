import path from "path";
import {
  walk,
  pathExists,
  pathIterate,
  pathCreate,
  pathFind,
  rootDefault,
  writeJson,
  readJson,
} from "../src/fs";

/* eslint-disable */

const main = async () => {
  console.log(await walk(path.resolve(__dirname)));
  console.log(await rootDefault());
  console.log(await pathExists(path.resolve(__dirname, "..")));
  await pathIterate(__dirname, true, async (p, c) => console.log(p, c));
  await pathCreate(`${__dirname}/sample.json`, true);
  console.log(await writeJson(`${__dirname}/sample.json`, { sample: "words" }));
  console.log(await readJson(`${__dirname}/sample.json`));
  console.log(
    await pathFind(path.resolve(__dirname, "..", ".."), `sample.json`)
  );
};

main()
  .then((val) => console.log(val))
  .catch((err) => console.log(err));

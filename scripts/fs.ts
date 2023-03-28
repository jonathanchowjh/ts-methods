import path from "path";
import {
  walk,
  root,
  pathExists,
  pathIterate,
  pathCreate,
  write,
  read,
} from "../src/fs";

/* eslint-disable */

const main = async () => {
  console.log(await walk(path.resolve(__dirname), true));
  console.log(await root());
  console.log(await pathExists(path.resolve(__dirname, "..")));
  await pathIterate(__dirname, true, async (p, c) => console.log(p, c));
  await pathCreate(`${__dirname}/sample.json`, true);
  console.log(
    await write(`${__dirname}/sample.json`, JSON.stringify({ sample: "words" }))
  );
  console.log(await read(`${__dirname}/sample.json`));
};

main()
  .then((val) => console.log(val))
  .catch((err) => console.log(err));

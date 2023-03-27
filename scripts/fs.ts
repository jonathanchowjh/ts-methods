import path from "path";
import { walk, root } from "../src/fs";

/* eslint-disable */

const main = async () => {
  console.log(await walk(path.resolve(__dirname), true));
  console.log(await root());
};

main()
  .then((val) => console.log(val))
  .catch((err) => console.log(err));

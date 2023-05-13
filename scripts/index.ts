import { safeExecute } from "../src/os";
import { replMain } from "./repl";
import { githubMain } from "./github";
import { typesMain } from "./types";

/* eslint-disable */

const main = async () => {
  // console.log(process.argv)
  if (process.argv.length < 3) return;
  switch (process.argv[2]) {
    case "repl":
      await replMain();
      break;
    case "github":
      await githubMain();
    case "types":
      await typesMain();
    default:
      console.log(
        await safeExecute(`npx ts-node scripts/${process.argv[2]}.ts`)
      );
      break;
  }
};

main()
  .then((val) => console.log(val))
  .catch((err) => console.error(err));

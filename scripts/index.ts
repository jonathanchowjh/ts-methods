import { safeExecute } from "../src/os";

/* eslint-disable */

const main = async () => {
  // console.log(process.argv)
  switch (process.argv[2]) {
    case "error":
      console.log(await safeExecute("npx ts-node scripts/error.ts"));
      break;
    case "os":
      console.log(await safeExecute("npx ts-node scripts/os.ts"));
      break;
    case "fs":
      console.log(await safeExecute("npx ts-node scripts/fs.ts"));
      break;
    default:
      break;
  }
};

main()
  .then((val) => console.log(val))
  .catch((err) => console.error(err));

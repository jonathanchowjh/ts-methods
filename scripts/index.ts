import util from "util";
import { exec } from "child_process";

const execute = util.promisify(exec);

/* eslint-disable */

const main = async () => {
  // console.log(process.argv)
  switch (process.argv[2]) {
    case "error":
      const errRet = await execute("npx ts-node scripts/error.ts");
      console.log(errRet.stdout);
      break;
    case "os":
      const osRet = await execute("npx ts-node scripts/os.ts");
      console.log(osRet.stdout);
      break;
    default:
      break;
  }
};

main()
  .then((val) => console.log(val))
  .catch((err) => console.error(err));

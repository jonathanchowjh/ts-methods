import { safeExecute, uname } from "../src/os";

/* eslint-disable */

const main = async () => {
  console.log(await safeExecute("echo me"));
  console.log(await uname());
};

main()
  .then((val) => console.log(val))
  .catch((err) => console.log(err));

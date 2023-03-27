import { safeExecute, uname, unameExecute } from "../src/os";

/* eslint-disable */

const main = async () => {
  console.log(await safeExecute("echo me"));
  console.log(await uname());

  const LS_MAC = unameExecute({ Mac: "ls" });
  console.log(await LS_MAC());
  console.log(await unameExecute({ Mac: "ls" })());
};

main()
  .then((val) => console.log(val))
  .catch((err) => console.log(err));

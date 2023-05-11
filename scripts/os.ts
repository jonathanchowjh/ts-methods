import {
  execute,
  catchExecute,
  safeExecute,
  uname,
  unameExecute,
} from "../src/os";

/* eslint-disable */

const main = async () => {
  // Execute
  console.log(await execute("echo me"));
  console.log(await catchExecute("echo me"));
  console.log(await safeExecute("echo me"));

  // Uname
  console.log(await uname());
  const LS_MAC = unameExecute({ Mac: "ls" });
  console.log(await LS_MAC());
  console.log(await unameExecute({ Mac: "ls" })());
};

main()
  .then((val) => console.log(val))
  .catch((err) => console.log(err));

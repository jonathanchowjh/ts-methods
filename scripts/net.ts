import { getPublicIP } from "../src/net";

/* eslint-disable */

const main = async () => {
  const ip = await getPublicIP();
  console.log("Public IP address:", ip);
};

main()
  .then((val) => console.log(val))
  .catch((err) => console.log(err));

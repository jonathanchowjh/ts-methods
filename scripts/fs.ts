import {
  pathIterate,
  pathExists,
  pathCreate,
  pathFind,
  rootDefault,
  root,
  writeJson,
  readJson,
  writeJson2D,
  readJson2D,
} from "../src/fs";

/* eslint-disable */

const main = async () => {
  // ROOT and WALK
  console.log(await rootDefault());
  console.log(await root("scripts/sample.json"));

  // Create File / Path
  await pathIterate(await rootDefault(), true, async (p, c) => 0);
  await pathCreate(await root("scripts/sample.json"), true);
  console.log(await pathFind(await rootDefault(), `sample.json`));
  console.log(
    `sample.json exists: ${await pathExists(await root("scripts/sample.json"))}`
  );

  // JSON
  const written1 = await writeJson(await root("scripts/sample.json"), {
    sample: "words",
  });
  if (!written1) {
    console.log("Not Written json");
  } else {
    console.log(await readJson(await root("scripts/sample.json")));
  }

  // 2D JSON
  const written2 = await writeJson2D(
    await root("scripts/sample.json"),
    "key1",
    "key2",
    "value"
  );
  if (!written2) {
    console.log("Not Written 2D json");
  } else {
    console.log(
      await readJson2D(await root("scripts/sample.json"), "key1", "key2")
    );
  }
};

main()
  .then((val) => console.log(val))
  .catch((err) => console.log(err));

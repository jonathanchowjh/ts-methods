import {
  gitRepoUrlAdd,
  gitRepoUrlDelete,
  gitRepoUrlRead,
  cloneAll,
  branchUpdateAll,
  branchUpdateOne,
  branchLsRemote,
  GithubREPL,
} from "../src/github";

/* eslint-disable */

export const githubMain = async () => {
  console.log("Add URL: ", await gitRepoUrlAdd());
  console.log("Read URL: ", await gitRepoUrlRead());
  console.log("Delete URL: ", await gitRepoUrlDelete());

  const cloneLog = await cloneAll();
  cloneLog.map((val) => console.log(val));

  const updateLog = await branchUpdateOne();
  console.log(updateLog);
  const updateAllLog = await branchUpdateAll();
  updateAllLog.map((val) => console.log(val));

  const branchLsRemoteLog = await branchLsRemote("subgraphs");
  branchLsRemoteLog.map((val) => console.log(val));

  new GithubREPL();
};

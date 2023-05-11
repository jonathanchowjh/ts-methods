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
  // Add Repos
  console.log("Add URL: ", await gitRepoUrlAdd());
  console.log("Read URL: ", await gitRepoUrlRead());
  console.log("Delete URL: ", await gitRepoUrlDelete());

  // Clone Repos
  const cloneLog = await cloneAll();
  cloneLog.map((val) => console.log(val));

  // Update Repos
  const updateLog = await branchUpdateOne();
  console.log(updateLog);
  const updateAllLog = await branchUpdateAll();
  updateAllLog.map((val) => console.log(val));

  // Branch LS
  const branchLsRemoteLog = await branchLsRemote("subgraphs");
  branchLsRemoteLog.map((val) => console.log(val));

  // Github REPL
  new GithubREPL();
};

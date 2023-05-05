import { readLine, readLineSelect, REPL } from "../src/repl";

/* eslint-disable */
class Chat extends REPL {
  constructor() {
    super("Enter Text: ", true);
  }

  override default(cmds: string[]): void {
    console.log(cmds);
  }

  edit(cmds: string[]): void {
    if (cmds.length < 3) return;
    const second = cmds[1];
    const third = cmds[2];
    if (second != "question") return;
    this.question = third;
  }
}

export const replMain = async () => {
  console.log(await readLine("Question 1: "));
  console.log(await readLineSelect("Question 2: ", ["boy", "girl"]));
  new Chat();
};

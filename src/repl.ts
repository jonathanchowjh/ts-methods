import readline from "readline";
import { UtilsError } from "./error";

export const readLineSelect = async (
  question: string,
  select: string[]
): Promise<string> => {
  const options = select.map((option, idx) => `${idx}. ${option}`);
  // eslint-disable-next-line
  console.log(options.join("\n"));
  const input = await readLine(question);
  const idx = parseInt(input, 10);
  if (Number.isNaN(idx)) {
    if (!select.includes(input)) throw new UtilsError("Invalid User Input");
    return input;
  }
  if (idx >= select.length || idx < 0)
    throw new UtilsError("Invalid User Input");
  return select[idx];
};

export const readLine = async (question: string): Promise<string> => {
  let answer: string = "";
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  answer = (await new Promise((resolve) => {
    rl.question(question, resolve);
  })) as string;
  rl.close();
  return answer;
};

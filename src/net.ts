/**
 * getIP
 * getIPMask
 * getSOCKSIP
 */

import { toError, UtilsError } from "./error";

export const getPublicIP = async (): Promise<string> => {
  try {
    const response = await fetch("https://api.ipify.org/?format=json");
    const res = (await response.json()) as { ip: string };
    return res.ip;
  } catch (error: unknown) {
    throw new UtilsError(toError(error).message);
  }
};

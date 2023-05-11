/**
 * getIP
 * getIPMask
 * getSOCKSIP
 * webrtc
 */

/* eslint-disable no-console */
import net from "net";
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

export const createServer = async () => {
  // const publicIP = await getPublicIP()
  const PORT = 3000;
  const server = net.createServer((socket) => {
    console.log("New client connected");
    // Handle incoming data from the client
    socket.on("data", (data) => {
      console.log(`Client: ${data}`);
    });
    // Handle client disconnect
    socket.on("end", () => {
      console.log("Client disconnected");
    });
  });
  // Start listening on the specified port
  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
};

export const connect = async () => {
  // const publicIP = await getPublicIP()
  const IP_ADDRESS = "123.45.67.89";
  const PORT = 3000;

  const socket = net.connect(PORT, IP_ADDRESS, () => {
    console.log("Connected to server!");
  });

  socket.on("data", (data: Buffer) => {
    console.log(`Received data from server: ${data}`);
  });

  socket.on("close", () => {
    console.log("Disconnected from server!");
  });

  socket.on("error", (err) => {
    console.log(`Error occurred: ${err}`);
  });
};

declare global {
  var sessionValue: Buffer<ArrayBuffer> | undefined;
}

if (!global.sessionValue) {
  global.sessionValue = Buffer.from("", "utf-8");
}

export const getSession = (): Buffer<ArrayBuffer> => global.sessionValue!
export const setSession = (value: Buffer<ArrayBuffer>): void => {
  global.sessionValue = value;
}
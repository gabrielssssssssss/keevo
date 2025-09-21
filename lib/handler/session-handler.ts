declare global {
  var sessionValue: string | undefined
}

if (!global.sessionValue) {
  global.sessionValue = "default"
}

export const getSession = (): string => global.sessionValue!
export const setSession = (value: string): void => {
  global.sessionValue = value
}
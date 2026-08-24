export const assertNever = (value: never) => {
  throw new Error(`Unhandled discriminated union number ${JSON.stringify(value)}`)
}

export const regexConstants: { [key: string]: RegExp } = {
  // EMAIL: /^[^\s@] + @([^\s@.,]+\.)+[^\s@.,]{2,}$/,
  EMAIL: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  // PASSWORD: /^(S?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%_*#?&])[A-Za-z\d@$_!%#?&]{8,}$/,
  PASSWORD: /^[a-zA-Z0-9]{2,}$/,
};

import bcrypt from "bcryptjs";

export const hash = (text: string): string => bcrypt.hashSync(text);
export const compare = (text: string, hash: string): boolean =>
  bcrypt.compareSync(text, hash);

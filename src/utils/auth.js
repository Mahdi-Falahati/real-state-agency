import { hash, compare, genSalt } from "bcryptjs";

async function hashPassword(password) {
  const salt = await genSalt(11);
  const hashedPassword = await hash(password, salt);
  return hashedPassword;
}

async function verifyPassword(password, hashPassword) {
  const isValid = await compare(password, hashPassword);
  return isValid;
}

export { hashPassword, verifyPassword };

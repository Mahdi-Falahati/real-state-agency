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

const validateEmail = (email) => {
  const isValid =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  return isValid;
};

export { hashPassword, verifyPassword, validateEmail };

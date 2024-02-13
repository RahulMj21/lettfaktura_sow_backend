const argon = require("argon2");
const JWT = require("jsonwebtoken");
const { TOKEN_SECRET } = require("../config");

exports.generatePassword = async (password) => {
  return await argon.hash(password);
};

exports.validatePassword = async (passwordHash, password) => {
  return await argon.verify(passwordHash, password);
};

exports.generateSignature = (payload) => {
  return JWT.sign(payload, TOKEN_SECRET, { expiresIn: "30d" });
};

exports.validateSignature = (token) => {
  try {
    const payload = JWT.verify(token, TOKEN_SECRET);
    req.user = payload;
    return true;
  } catch (error) {
    return false;
  }
};

exports.formatData = (data) => {
  if (data) {
    return { data };
  } else {
    throw new Error("Data Not found!");
  }
};

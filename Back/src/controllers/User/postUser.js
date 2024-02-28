const { User } = require("../../db");

const postUser = async (name, email, password, phone) => {
  const newUser = await User.create({
    name: name,
    email: email,
    password: password,
    phone: phone,
  });

  return newUser;
};

module.exports = postUser;

const { User } = require("../../db");

const getUser = async () => {
  const user = await User.findAll();

  const allUsers = user.map((u) => ({
    name: u.name,
    email: u.email,
    password: u.password,
    phone: u.phone,
  }));

  if (allUsers.length === 0) {
    console.error("No se han encontrado usuarios");
  }

  return allUsers;
};

module.exports = getUser;

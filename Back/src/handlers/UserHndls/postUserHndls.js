const postUser = require("../../controllers/User/postUser");

const postUserHndls = async (req, res) => {
  const { name, email, password, phone } = req.body;

  try {
    const newUser = await postUser(name, email, password, phone);
    console.log(newUser);
    res.status(200).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = postUserHndls;

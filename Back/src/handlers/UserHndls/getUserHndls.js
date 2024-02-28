const getUser = require("../../controllers/User/getUser");

const getUserHndls = async (req, res) => {
  try {
    const user = await getUser();

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getUserHndls;

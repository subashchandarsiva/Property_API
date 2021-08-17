const { getHomesList } = require("./gethome-service");
const { addHome } = require("./addhome-service");
const { updateHome } = require("./updatehome-service");
const { deleteHome } = require("./deletehome-service");

module.exports = {
  getHomesList,
  addHome,
  updateHome,
  deleteHome,
};

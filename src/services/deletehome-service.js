const { Property } = require("../model/property.schema");

const deleteHome = async (id) => {
  try {
    const deleteInfo = await Property.deleteOne({ _id: id });
    if (deleteInfo.n == 0) throw new Error();
    return "Home Deleted";
  } catch (e) {
    return new Error("Error in deleting the property");
  }
};

module.exports = {
  deleteHome,
};

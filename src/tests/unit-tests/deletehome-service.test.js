const { Property } = require("../../model/property.schema");

jest.mock("../../model/property.schema");

const { deleteHome } = require("../../services");

describe("Checking our service functions which talks to DB", () => {
  describe("Delete Homes - Success", () => {
    beforeEach(() => {
      Property.deleteOne = jest.fn().mockResolvedValue({
        n: 1,
      });
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("Should return successful response when deleting a home", (done) => {
      const data = deleteHome("611ad1b6b08571205eb3066c");
      expect(Property.deleteOne).toHaveBeenCalled();
      expect(data).resolves.toEqual("Home Deleted");
      done();
    });
  });

  describe("Delete Homes - Failure", () => {
    beforeEach(() => {
      Property.save = jest.fn().mockResolvedValue({
        n: 0,
      });
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("Should return an error when data with given id is not found", (done) => {
      const data = deleteHome("somerandomid");
      expect(Property.deleteOne).toHaveBeenCalled();
      expect(data).rejects.toEqual(new Error("Error in deleting the property"));
      done();
    });

    beforeEach(() => {
      Property.save = jest
        .fn()
        .mockRejectedValue(new Error("Error in deleting the property"));
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("Should return an error when not able to delete the data", (done) => {
      const data = deleteHome("somerandomid");
      expect(Property.deleteOne).toHaveBeenCalled();
      expect(data).rejects.toEqual(new Error("Error in deleting the property"));
      done();
    });
  });
});

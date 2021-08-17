const { Property } = require("../../model/property.schema");

jest.mock("../../model/property.schema");

const { updateHome } = require("../../services");

describe("Checking our service functions which talks to DB", () => {
  describe("Update Homes - Success", () => {
    beforeEach(() => {
      const mockData = {
        contact: "subashchandarsiva@gmail.com",
        id: "611ad1b6b08571205eb3066c",
        location: "UK,Canary Wharf",
        name: "Subashchandar S",
      };
      Property.findOneAndUpdate = jest.fn().mockResolvedValue(mockData);
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("Should return successful response when updating a home", (done) => {
      const expected = {
        contact: "subashchandarsiva@gmail.com",
        id: "611ad1b6b08571205eb3066c",
        location: "UK,Canary Wharf",
        name: "Subashchandar S",
      };
      const data = updateHome({
        id: expected.id,
        name: expected.name,
        location: expected.location,
        contact: expected.contact,
      });
      expect(Property.findOneAndUpdate).toBeCalled();
      expect(data).resolves.toEqual(expected);
      done();
    });
  });

  describe("Update Homes - Failure", () => {
    beforeEach(() => {
      Property.findOneAndUpdate = jest
        .fn()
        .mockRejectedValue(new Error("Error in updating the property"));
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("Should return an error when update fails", (done) => {
      const expected = {
        contact: "subashchandarsiva@gmail.com",
        id: "611ad1b6b08571205eb3066c",
        location: "UK,Canary Wharf",
        name: "Subashchandar S",
      };
      const data = updateHome({
        id: expected.id,
        name: expected.name,
        location: expected.location,
        contact: expected.contact,
      });
      expect(data).rejects.toEqual(new Error("Error in updating the property"));
      done();
    });
  });
});

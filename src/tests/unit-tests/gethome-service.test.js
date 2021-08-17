const { Property } = require("../../model/property.schema");

jest.mock("../../model/property.schema");

const { getHomesList } = require("../../services");

describe("Checking our service functions which talks to DB", () => {
  describe("Get Homes - Success", () => {
    beforeEach(() => {
      const mockData = [
        {
          contact: "subashchandarsiva@gmail.com",
          id: "611ad1b6b08571205eb3066c",
          location: "UK,Canary Wharf",
          name: "Subashchandar S",
        },
      ];
      Property.find = jest.fn().mockResolvedValue(mockData);
    });

    afterAll(() => {
      jest.clearAllMocks();
    });

    it("Should return successful response when querying for list of all homes", (done) => {
      const expected = [
        {
          contact: "subashchandarsiva@gmail.com",
          id: "611ad1b6b08571205eb3066c",
          location: "UK,Canary Wharf",
          name: "Subashchandar S",
        },
      ];
      const data = getHomesList();
      expect(Property.find).toHaveBeenCalled();
      expect(data).resolves.toEqual(expected);
      done();
    });
  });

  describe("Get Homes - Error", () => {
    beforeAll(() => {
      Property.find = jest
        .fn()
        .mockRejectedValue(new Error("Couldn't get list of properties"));
    });

    afterAll(() => {
      jest.clearAllMocks();
    });

    it("Should return an error while getting list of properties", (done) => {
      const data = getHomesList();
      expect(Property.find).toHaveBeenCalled();
      expect(data).rejects.toEqual(
        new Error("Couldn't get list of properties")
      );
      done();
    });
  });
});

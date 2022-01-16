import { Distance } from "./Distance";

describe("Distance", () => {
  describe("format", () => {
    it("Should return the formatted distance", () => {
      expect(new Distance(3000).formattedDistance).toBe(3000);
      expect(new Distance(1).formattedDistance).toBe(1);
    });
    it("Should return 0 if the distance is negative", () => {
      expect(new Distance(0).formattedDistance).toBe(0);
      expect(new Distance(-1000).formattedDistance).toBe(0);
    });
  });
  describe("format with unit", () => {
    it("Should return the formatted distance with unit", () => {
      expect(new Distance(3000).formattedDistanceWithUnit).toBe("3000 km");
    });
    it("Should return 0 if the distance is negative", () => {
      expect(new Distance(0).formattedDistanceWithUnit).toBe("0 km");
      expect(new Distance(-1000).formattedDistanceWithUnit).toBe("0 km");
    });
  });
});

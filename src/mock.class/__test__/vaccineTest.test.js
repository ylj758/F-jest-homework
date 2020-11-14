import VaccineTest from "../vaccineTest";
import Recipient from "../recipient";
import Covid19Vaccine from "../covid19Vaccine";

const mockAcceptInjection = jest.fn();
let mockGetHasAntibodies = jest.fn().mockReturnValue(true);
jest.mock("../recipient", () => {
  // mock class实现
  return jest.fn().mockImplementation(() => {
    return {
      acceptInjection: mockAcceptInjection,
      getHasAntibodies: mockGetHasAntibodies,
    };
  });
});

beforeEach(() => {
  // clear mock here
  mockGetHasAntibodies.mockClear();
  mockAcceptInjection.mockClear();
});

describe("inject", () => {
  test("should recipient accept injection with vaccine", () => {
    // TODO 14: add test here
    new VaccineTest().inject();
    expect(mockAcceptInjection).toHaveBeenCalledTimes(1);
  });
});

describe("test", () => {
  test("should get Success if recipient has antibodies", () => {
    // TODO 15: add test here
    const result = new VaccineTest().test();
    expect(mockGetHasAntibodies).toHaveBeenCalledTimes(1);
    expect(result).toBe("Vaccine Test Success");
  });

  test("should get Failed if recipient has no antibodies", () => {
    // TODO 16: add test here
    mockGetHasAntibodies = jest.fn().mockReturnValue(false);
    const result = new VaccineTest().test();
    expect(mockGetHasAntibodies).toHaveBeenCalledTimes(1);
    expect(result).toBe("Vaccine Test Failed");
  });
});

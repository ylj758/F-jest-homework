import { register } from "../user";
import { verifyUsername } from "../verify";
import axios from "axios";

jest.mock("../verify");
jest.mock("axios");

const username = "marry";
const password = "123"
describe("register", () => {
  test("should post user when validated", async () => {
    // TODO 19: add test here
    axios.post.mockResolvedValue({ data: { username, password }});
    await expect(register(username, password)).resolves.toEqual({ username, password });
  });

  test("should reject with Error when username is invalid", async () => {
    // TODO 20: add test here
    verifyUsername.mockReturnValue(false);
    await expect(register(username, password)).rejects.toThrowError(
        new Error("wrong username or password"));
  });
});

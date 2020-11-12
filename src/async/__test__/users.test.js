import axios from "axios";
import getUsers from "../users";

jest.mock("axios");
describe("users", () => {
    test("should get users data with mock axios get", () => {
        // TODO 13: add async test with manual mock
        const user = {name: "marry", password: "123"};
        axios.get.mockResolvedValue({data: user});
        expect(getUsers()).resolves.toEqual(user);
    });
});

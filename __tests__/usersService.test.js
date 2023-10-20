import { getUsers, getUserDetails } from "@/services/users";

describe("Test userService [getUsers]", () => {
  it("should successfully fetch data from API URL", async () => {
    const mockResponse = { data: "mock data" };
    const mockFetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockResponse),
    });
    global.fetch = mockFetch;

    const result = await getUsers();

    expect(mockFetch).toHaveBeenCalledWith(`${process.env.API_URL}/users`);
    expect(result).toEqual(mockResponse);
  });

  it("should return JSON data", async () => {
    const mockResponse = { data: "mock data" };
    const mockFetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockResponse),
    });
    global.fetch = mockFetch;

    const result = await getUsers();

    expect(result).toEqual(mockResponse);
  });

  it("should throw error when the response from the API is not ok", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
    });

    await expect(getUsers()).rejects.toThrow("Failed to fetch data");
    expect(fetch).toHaveBeenCalledWith(`${process.env.API_URL}/users`);
  });

  it("should handle invalid data gracefully", async () => {
    const mockFetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockRejectedValue(new Error("Invalid data")),
    });
    global.fetch = mockFetch;

    await expect(getUsers()).rejects.toThrow("Invalid data");
  });
  it("should return null when the response from the API is not valid JSON", async () => {
    const userId = "validUserId";

    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockRejectedValue(new Error()),
    });

    const userDetails = await getUserDetails(userId);

    expect(userDetails).toBeNull();
    expect(fetch).toHaveBeenCalledWith(
      `${process.env.API_URL}/users/${userId}`
    );
  });
});

describe("Test userService [getUserDetails]", () => {
  it("should return user details when given a valid userId", async () => {
    const userId = "validUserId";
    const expectedUserDetails = { name: "John Doe", age: 25 };

    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(expectedUserDetails),
    });

    const userDetails = await getUserDetails(userId);

    expect(userDetails).toEqual(expectedUserDetails);
    expect(fetch).toHaveBeenCalledWith(
      `${process.env.API_URL}/users/${userId}`
    );
  });

  it("should return null when the response from the API is not ok", async () => {
    const userId = "validUserId";

    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
    });

    const userDetails = await getUserDetails(userId);

    expect(userDetails).toBeNull();
    expect(fetch).toHaveBeenCalledWith(
      `${process.env.API_URL}/users/${userId}`
    );
  });

  it("should return null when the API response is missing required fields", async () => {
    const userId = "validUserId";

    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(null),
    });

    const userDetails = await getUserDetails(userId);

    expect(userDetails).toBeNull();
    expect(fetch).toHaveBeenCalledWith(
      `${process.env.API_URL}/users/${userId}`
    );
  });
});

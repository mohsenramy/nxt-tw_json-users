import { render, screen } from "@testing-library/react";
import UsersListPage, { metadata } from "@/app/users/page";
import { getUsers } from "@/services/users";

const validResponse = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    company: { name: "ABC Inc." },
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane@example.com",
    company: { name: "XYZ Corp." },
  },
];
jest.mock("@/services/users");

describe("UsersListPage Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the component with user list", async () => {
    getUsers.mockResolvedValue(validResponse);

    render(await UsersListPage());

    const nameElement1 = screen.getByText("John Doe");
    const nameElement2 = screen.getByText("Jane Doe");
    expect(nameElement1).toBeInTheDocument();
    expect(nameElement2).toBeInTheDocument();
  });

  it("renders no data available message when no users are returned", async () => {
    getUsers.mockResolvedValue([]);

    render(await UsersListPage());

    const noDataMessage = screen.getByText("No Data available");
    expect(noDataMessage).toBeInTheDocument();
  });

  it("generates correct metadata", () => {
    expect(metadata).toEqual({
      title: "Users List",
      description: "Users List from JSON PlaceHolder",
    });
  });
});

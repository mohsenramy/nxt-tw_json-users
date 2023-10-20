import { render, screen } from "@testing-library/react";
import UserDetailsPage, { generateMetadata } from "@/app/users/[userId]/page";
import { getUserDetails } from "@/services/users";

jest.mock("@/services/users");

const validResponse = {
  id: 1,
  name: "John Doe",
  username: "johndoe",
  email: "john@example.com",
  phone: "123-456-7890",
  company: {
    name: "ABC Inc.",
    catchPhrase: "Catch me if you can",
  },
  address: {
    street: "123 Main St",
    suite: "Apt 101",
    city: "New York",
    zipcode: "10001",
    geo: {
      lat: "40.7128",
      lng: "-74.0060",
    },
  },
};
describe("UserDetailsPage Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the component with user details", async () => {
    getUserDetails.mockResolvedValue(validResponse);
    render(await UserDetailsPage({ params: { userId: "1" } }));

    const nameElement = screen.getByText("John Doe");
    expect(nameElement).toBeInTheDocument();
  });

  it('renders "User was not found" message when user is not found', async () => {
    getUserDetails.mockResolvedValue(null);

    render(await UserDetailsPage({ params: { userId: "1" } }));

    const notFoundMessage = screen.getByText("User was not found");
    expect(notFoundMessage).toBeInTheDocument();
  });

  it("generates correct metadata", async () => {
    getUserDetails.mockResolvedValue(validResponse);

    const metadata = await generateMetadata({ params: { userId: "1" } });
    expect(metadata).toEqual({
      title: "John Doe",
      description: "Details page of John Doe",
    });
  });
  it("generates correct metadata for not found user", async () => {
    getUserDetails.mockResolvedValue(null);

    const metadata = await generateMetadata({ params: { userId: "1" } });
    expect(metadata).toEqual({
      title: "User Not Found",
      description: "",
    });
  });
});

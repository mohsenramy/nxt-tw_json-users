// import Home from "@/app/page";
// import { render, screen } from "@testing-library/react";

// describe("Home page", () => {
//   it("Shall render without errors", () => {
//     render(<Home />);
//     const element = screen.findByText("Home Page");
//     expect(element).toBeInTheDocument();
//   });
// });

import Home from "@/app/page";
import { render, screen } from "@testing-library/react";
// import Home from "../app/page";

describe("Home", () => {
  it("should have Home Page text", () => {
    render(<Home />); // ARRANGE

    const myElem = screen.getByText("Home Page"); // ACT

    expect(myElem).toBeInTheDocument(); // ASSERT
  });
});

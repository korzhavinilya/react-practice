import { render, screen } from "@testing-library/react";
import Test from "../app/Test";

describe("Test", () => {
  it("renders Test component", async () => {
    render(<Test />);
    expect(screen.getByText(/Search:/i)).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText("search...")).toBeInTheDocument();
    expect(screen.getByAltText("search image")).toBeInTheDocument();
    expect(screen.getByDisplayValue("default search value")).toBeInTheDocument();

    // Use queryBy if elements don't exist on a render step
    expect(screen.queryByText(/Search for React/i)).toBeNull();

    // Use findBy for async elements

  });
});
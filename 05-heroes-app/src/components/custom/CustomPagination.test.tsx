import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { CustomPagination } from "./CustomPagination";
import { MemoryRouter } from "react-router";
import { type PropsWithChildren } from "react";


vi.mock("../ui/button", () => ({
  Button: ({ children, ...props }: PropsWithChildren) => {
    <button {...props}>{children}</button>;
  },
}));

const renderWithRouter = (component: React.ReactElement) => {
  return render(<MemoryRouter>{component}</MemoryRouter>);
};

describe("CustomPagination", () => {


  test("should render component with default values", () => {
    renderWithRouter(<CustomPagination totalPages={5} />);

    expect(screen.getByText('Previous')).toBeDefined()
  });

  test('should disabled previous button when page is 1',()=>{
    renderWithRouter(<CustomPagination totalPages={5} />);

    const previousButton = screen.getByText('Previous');

    screen.debug(previousButton)
  })
});

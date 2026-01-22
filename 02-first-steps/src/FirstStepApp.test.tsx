import { afterEach, describe, expect, test, vi } from "vitest";
import { FirstStepApp } from "./FirstStepApp";
import { render, screen } from "@testing-library/react";

const mockItemCounter = vi.fn((props: unknown) => {
  return <div data-testid="ItemCounter" />;
});

vi.mock("./shopping-cart/ItemCounter", () => ({
  ItemCounter: (props: unknown) => mockItemCounter(props),
}));
/* vi.mock("./shopping-cart/ItemCounter", () => ({
  ItemCounter: (props: unknown) => (
    <div 
        data-testid="ItemCounter" 
        name={props.name} 
        quantity={props.quantity}
    />
  ),
})); */

describe("FirstStepApp", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test("should match snapshot", () => {
    const container = render(<FirstStepApp />);
    expect(container).toMatchSnapshot();
  });

  test("should render the correct number of ItemCounter components", () => {
    render(<FirstStepApp />);

    const ItemCounters = screen.getAllByTestId("ItemCounter");

    expect(ItemCounters.length).toBe(3);
  });

  test("should render ItemCounter with correct props", () => {
    render(<FirstStepApp />);
    expect(mockItemCounter).toHaveBeenCalledTimes(3);
    expect(mockItemCounter).toHaveBeenCalledWith({
      productName: "Producto A",
      quantity: 1,
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      productName: "Producto B",
      quantity: 4,
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      productName: "Producto C",
      quantity: 3,
    });
  });
});

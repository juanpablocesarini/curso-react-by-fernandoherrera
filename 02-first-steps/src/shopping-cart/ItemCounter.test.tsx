import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";

describe("Itemcounter", () => {
  test("should render with default values", () => {
    const name = "test-name";
    render(<ItemCounter productName={name} />);
    expect(screen.getByText(name)).toBeDefined();
    expect(screen.getByText(name)).not.toBeNull();
  });

  test("should render with custom quantity", () => {
    const name = "test-name";
    const quantity = 10;
    render(<ItemCounter productName={name} quantity={quantity} />);
    expect(screen.getByText(quantity)).toBeDefined();
  });

  test('should increase count when +1 button is pressed', () =>{
    render(<ItemCounter productName={'test-name'} quantity={1} />);

    const [buttonAdd] = screen.getAllByRole('button');

    fireEvent.click(buttonAdd)

    expect(screen.getByText('2')).toBeDefined()
  });

  test('should decrease count when -1 button is pressed',()=>{
    const quantity = 5;
    render(<ItemCounter productName={'test-name'} quantity={quantity} />);
    const [,buttonMinus] = screen.getAllByRole('button');
    fireEvent.click(buttonMinus);
    expect(screen.getByText('4')).toBeDefined()
  });

    test('should not decrease count when -1 button is pressed and quantity is 1',()=>{
    const quantity = 1;
    render(<ItemCounter productName={'test-name'} quantity={quantity} />);
    const [,buttonMinus] = screen.getAllByRole('button');
    fireEvent.click(buttonMinus);
    expect(screen.getByText('1')).toBeDefined()
  });

  test('should change to red when count is 1',()=>{
    const quantity = 1;
    const name = 'test-name';
    render(<ItemCounter productName={name} quantity={quantity} />);

    const itemText = screen.getByText(name);
    expect(itemText.style.color).toBe('red');
    

  })

  test('should change to black when count is greater than 1',()=>{
    const quantity = 2;
    const name = 'test-name';
    render(<ItemCounter productName={name} quantity={quantity} />);

    const itemText = screen.getByText(name);
    expect(itemText.style.color).toBe('black');
    

  })
});

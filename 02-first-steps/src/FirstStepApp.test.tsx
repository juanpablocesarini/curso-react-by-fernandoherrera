import { describe, expect, test, vi } from "vitest";
import { FirstStepApp } from "./FirstStepApp";
import { render,screen } from "@testing-library/react";


vi.mock('./shopping-cart/ItemCounter',()=>({
    ItemCounter: ()=> <div data-testid="ItemCounter"/>
}));


describe('FirstStepApp',()=>{
    test('should match snapshot',()=>{
        const container = render(<FirstStepApp/>)
        expect(container).toMatchSnapshot();
    })

    test('should render the correct number of ItemCounter components',()=>{
        render(<FirstStepApp/>)

        const ItemCounters =screen.getAllByTestId('ItemCounter');

        expect(ItemCounters.length).toBe(3);

    })
})
import { render , screen} from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";


describe('Itemcounter',()=>{
    test('should render with default values',()=>{
        const name = 'test-name';
        render(<ItemCounter productName={name}/>);
        expect(screen.getByText(name)).toBeDefined();
        expect(screen.getByText(name)).not.toBeNull();
    })

        test('should render with custom quantity',()=>{
        const name = 'test-name';
        const quantity=10;
        render(<ItemCounter productName={name} quantity={quantity}/>);
        expect(screen.getByText(quantity)).toBeDefined();
        
    })
})
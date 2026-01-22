import { describe, expect, test } from "vitest";
import { FirstStepApp } from "./FirstStepApp";
import { render } from "@testing-library/react";

describe('FirstStepApp',()=>{
    test('should match snapshot',()=>{
        const container = render(<FirstStepApp/>)
        expect(container).toMatchSnapshot();
    })
})
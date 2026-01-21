import { describe, test } from "vitest";
import {render,screen} from '@testing-library/react';
import { MyAwosomeApp } from "./MyAwesomeApp";


describe('MyAwesomeApp',()=>{
  test('should render firstName and lastName',() =>{
    const {container} = render(<MyAwosomeApp/>)
    screen.debug();
  })
})
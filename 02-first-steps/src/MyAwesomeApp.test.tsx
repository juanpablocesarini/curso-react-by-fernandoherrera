import { describe, expect, test } from "vitest";
import {render,screen} from '@testing-library/react';
import { MyAwosomeApp } from "./MyAwesomeApp";


describe('MyAwesomeApp',()=>{
  test('should render firstName and lastName',() =>{
    const {container} = render(<MyAwosomeApp/>)
    screen.debug();

    const h1 = container.querySelector('h1');
    const h3 = container.querySelector('h3');

    expect(h1?.innerHTML).toContain('Juan Pablo');     
    expect(h3?.innerHTML).toContain('Cesarini')
  })

   test('should render firstName and lastName - screen',() =>{
    render(<MyAwosomeApp/>)
    

    const h1 = screen.getByTestId('first-name-title')
    expect(h1.innerHTML).toContain('Juan Pablo');
   
  })
  test('should match snapshot' , () =>{
    render(<MyAwosomeApp/>);

    expect(screen.getByTestId('div-app')).toMatchSnapshot();
  })
})
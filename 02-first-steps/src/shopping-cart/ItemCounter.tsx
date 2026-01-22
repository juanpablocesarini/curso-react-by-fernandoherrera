import { useState } from "react";

import './ItemCounter.css';

interface Props {
  productName: string;
  quantity?: number;
}

export const ItemCounter = ({ productName, quantity=1 }: Props) => {
  const [count, setCount] = useState(quantity);

  const handleAdd = () => {
    
    setCount(count + 1);
  };
  const handleSubtract = () => {
    
    if (count ===1)return;
    setCount(count - 1);
  };
 /*  const handleClick = () => {
    console.log(`Click! ${productName}`);
  }; */
  return (
    <section className="item-raw" >
      <span className="item-text"
        style={{
          color: count===1 ?'red':'black',
        }}
      >
        {productName}
      </span>
      <button onClick={handleAdd}> +1</button>
      <span>{count}</span>
      <button onClick={handleSubtract}>-1</button>
    </section>
  );
};

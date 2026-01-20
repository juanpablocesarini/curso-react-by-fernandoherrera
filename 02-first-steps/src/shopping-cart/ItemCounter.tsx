import { useState } from "react";

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
  const handleClick = () => {
    console.log(`Click! ${productName}`);
  };
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginTop: 15,
      }}
    >
      <span
        style={{
          width: 150,
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

interface Props {
  productName: string;
  quantity?: number;
}

export const ItemCounter = ({ productName, quantity }: Props) => {
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
      <button
        /*        onMouseEnter={()=>{
                console.log(`Pasando el mouse! ${productName}`)
            }} */
        onClick={handleClick}
      >
        +1
      </button>
      <span>{quantity}</span>
      <button>-1</button>
    </section>
  );
};

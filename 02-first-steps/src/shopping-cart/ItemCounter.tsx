interface Props{
    productName:string;
    quantity?: number;
}

export const ItemCounter = ({productName, quantity}:Props) => {
  return (
    <section style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        marginTop:15

    }}>
        <span style={{
            width:150,
        }}
        >{productName}</span>
        <button>+1</button>
        <span>{quantity}</span>
        <button>-1</button>
    </section>
  )
}

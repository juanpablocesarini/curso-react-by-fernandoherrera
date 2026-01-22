import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
  productDescription: string;
  quantity: number;
}

const itemsInCart: ItemInCart[] = [
  { productDescription: "Producto A", quantity: 1 },
  { productDescription: "Producto B", quantity: 4 },
  { productDescription: "Producto C", quantity: 3 },
];
export function FirstStepApp() {
  return (
    <div data-testid="div-app">
      <h1>Carrito de compras</h1>
      {itemsInCart.map(({productDescription, quantity}) => (
        <ItemCounter key={productDescription} productName={productDescription} quantity={quantity} />
      ))}

      {/*          <ItemCounter productName="Producto 1" quantity={5}/>
         <ItemCounter productName="Producto 2" quantity={3}/>
         <ItemCounter productName="Producto 3" quantity={2}/> */}
    </div>
  );
}

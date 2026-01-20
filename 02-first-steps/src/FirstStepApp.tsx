import { ItemCounter } from "./shopping-cart/ItemCounter";

export function FirstStepApp() {
    return (
        <>
            <h1>Carrito de compras</h1>
         <ItemCounter productName="Producto 1" quantity={5}/>
         <ItemCounter productName="Producto 2" quantity={3}/>
         <ItemCounter productName="Producto 3" quantity={2}/>
        </>
    )
}
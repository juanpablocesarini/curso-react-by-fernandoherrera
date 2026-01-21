import type { CSSProperties } from "react";

const firstName = "Juan Pablo";
const lastName = " Cesarini";
const favoritesGames = ["Damas", "Dados", "Burako"];
const isActive = true;
const address = {
  zipCode: "ABC-123",
  conuntry: "mi_país",
};

const myStyles:CSSProperties = {
        backgroundColor: isActive ?'red' :'green',
        borderRadius:10,
        color: "white",
        padding: 15,
        margin:20
      }

export function MyAwosomeApp() {
    
  return (
    <>
      <h1 data-testid="first-name-title">{firstName}</h1>
      <h3>{lastName}</h3>
      <p>{favoritesGames.join(", ")}</p>

      <h1>{isActive ? "Activo" : "No activo"}</h1>

      <p
      style={myStyles}>{JSON.stringify(address)}</p>
    </>
  );
}

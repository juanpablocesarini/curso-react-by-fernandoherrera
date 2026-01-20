const firstName = "Juan Pablo";
const lastName = " Cesarini";
const favoritesGames = ["Damas", "Dados", "Burako"];
const isActive = true;
const address = {
  zipCode: "ABC-123",
  conuntry: "mi_país",
};

export function MyAwosomeApp() {
  return (
    <>
      <h1>{firstName}</h1>
      <h3>{lastName}</h3>
      <p>{favoritesGames.join(", ")}</p>

      <h1>{isActive ? "Activo" : "No activo"}</h1>

      <p>{JSON.stringify(address)}</p>
    </>
  );
}

export interface User {
  id: number;
  name: string;
  location: string;
  role: string;
}

export const getUserAction = async (id: number) => {
  console.log("llamada");
  await new Promise((res) => setTimeout(res, 2000));
  console.log("resuelta");
  return {
    id: id,
    name: "Juan Pablo Cesarini",
    location: "Ciudad Autónoma de Buenos Aires, Argentina",
    role: "Profesor universitario y fullstack developer",
  };
};

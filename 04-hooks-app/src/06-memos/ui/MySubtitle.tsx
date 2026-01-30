import { memo } from "react";

interface Props {
    subtitle:string;
}

export const MySubtitle = memo(({subtitle}:Props) => {
   console.log("MySubtitle re render")
    return (
    <>
        <h6 className="text-2xl font-bold">{subtitle}</h6>
        <button className="bg-pink-700 text-white px-4 py-2 rounded-md cursor-pointer">LLamar a funcion</button>
    </>
  )
});

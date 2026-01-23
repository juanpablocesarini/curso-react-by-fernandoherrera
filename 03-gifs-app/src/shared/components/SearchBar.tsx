import { CustomButton } from "./CustomButton"

interface Props{
  placeholder?:string;
}

export const SearchBar = ({placeholder= 'Buscar'}:Props) => {
  return (
     <div className="search-container">
        <input type="text" placeholder={placeholder} name="" id="" />
        <CustomButton buttonName="Buscar"/>
      </div>
  )
}

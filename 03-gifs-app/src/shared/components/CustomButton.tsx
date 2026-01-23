interface Props{
    buttonName:string;
}

export const CustomButton = ({buttonName}:Props) => {
  return (
    <button>{buttonName}</button>
  )
}

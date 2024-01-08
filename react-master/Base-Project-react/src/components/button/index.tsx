import React from 'react'

type Props = {
    text:string;
}

const Button: React.FC<Props> = ({text}) => {
  const handleOnClick = () => {
    alert("đây là nút " + text)
    
  }
  return (
    <button onClick={()=>{handleOnClick()}} className=" focus:bg-green-500 hover:bg-green-300  text-gray-300 font-bold py-2 px-4 rounded m-1 focus:text-white hover:text-white border border-solid border-gray-300">
        {text}
    </button>
  )
}

export default Button
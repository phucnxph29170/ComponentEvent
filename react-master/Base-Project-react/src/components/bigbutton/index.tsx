import React from 'react'

type Props = {
    text:string;
    onClick: () => void;
}

const BigButton: React.FC<Props> = ({text, onClick}) => {
  return (
    <button 
    onClick={onClick}
    className="w-full bg-green-500 hover:bg-green-300  text-gray-300 hover:text-white font-bold py-2 px-4 rounded ml-0 mt-3 mb-3 focus:text-white border border-solid border-gray-300">
        {text}
    </button>
  )
}

export default BigButton
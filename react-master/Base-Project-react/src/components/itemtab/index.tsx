import React from 'react'

type Props = {
    text:string;
    onClick: () => void;
}

const ItemTab: React.FC<Props>  = ({text, onClick})  => {
  // const handleOnClick = () => {
  //   alert("đây là nút " + text)
    
  // }
  return (
    <li className="w-full">
        <a 
        href="#" 
        onClick={onClick}
        className="inline-block w-full p-4 text-gray-900 bg-gray-100 border-r border-gray-200 dark:border-gray-700 rounded-s-lg hover:bg-slate-600 active focus:outline-none dark:bg-gray-700 dark:text-white" 
        aria-current="page">{text}</a>
    </li>
  )
}

export default ItemTab
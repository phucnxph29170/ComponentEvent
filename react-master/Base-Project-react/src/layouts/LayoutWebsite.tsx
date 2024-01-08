import ItemTab from "@/components/itemtab";
import Reading from "@/page/reading";
import Writing from "@/page/writing";
import { useState } from "react";

const LayoutWebsite = () => {
    const [state, setState] = useState(1);
    const handleClickWrite = () =>{
        setState(1)
    }
    const handleClickReade = () =>{
        setState(-1)
    }
    
    if(state ==1 ){
        return <div>
            <div className="sm:hidden">
                <label htmlFor="tabs" className="sr-only">Select your country</label>
                <select id="tabs" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option>Writing</option>
                    <option>Reading</option>
                </select>
            </div>
            <ul className="hidden text-sm font-medium text-center text-gray-500 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
                <ItemTab text='Writing' onClick={handleClickWrite}/>
                <ItemTab text='Reading' onClick={handleClickReade}/>
            </ul>
            <Writing/>
        </div>     
    }else{
        return <div>
            <div className="sm:hidden">
                <label htmlFor="tabs" className="sr-only">Select your country</label>
                <select id="tabs" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option>Writing</option>
                    <option>Reading</option>
                </select>
            </div>
            <ul className="hidden text-sm font-medium text-center text-gray-500 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
                <ItemTab text='Writing' onClick={handleClickWrite}/>
                <ItemTab text='Reading' onClick={handleClickReade}/>
            </ul>
            <Reading/>
        </div>  
    }
};

export default LayoutWebsite;

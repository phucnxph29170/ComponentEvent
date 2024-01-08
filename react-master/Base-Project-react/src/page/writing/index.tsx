import BigButton from '@/components/bigbutton'
import Button from '@/components/button'
import Content from '@/components/content'
import React, { useState } from 'react'

type Props = {}

const Writing = (props: Props) => {
  const [textareaValue, setTextareaValue] = useState('');
  const handleClickWrite = () => {
    alert(textareaValue);
  }
  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(event.target.value);
  }
  return ( 
    <div className="w-1/2 m-auto">
        <div className="">
            <div className="grid grid-cols-2">
                <Button  text="Writing Topic"/>
                <Button text="From Your Essay"/>
            </div>
            <p className="text-2xl font-semibold mt-2 mb-2">From Your Essay</p>
            <textarea 
            value={textareaValue}
            onChange={handleTextareaChange}
            className='w-full h-36 border-solid border-gray-300 border-2 rounded p-2 mt-2' 
            placeholder='Type or paste your topic here'>

            </textarea>
            <BigButton text='Generate Quizz' onClick={handleClickWrite}/>
            <Content/>
        </div>
    </div>
  )
}

export default Writing
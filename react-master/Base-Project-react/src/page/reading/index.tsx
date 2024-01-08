import BigButton from '@/components/bigbutton'
import Button from '@/components/button'
import Content from '@/components/content'
import TextArea from '@/components/textarea'
import React, { useState } from 'react'

type Props = {}

const Reading = (props: Props) => {
  const [state, setState] = useState(1);
    const handleClickWrite = () =>{
        setState(1)
    }
  return (
    <div className="w-1/2 m-auto">
        <div className="">
            <div className="grid grid-cols-2">
                <Button text="Reading Topic"/>
                <Button text="From Your Speech"/>
            </div>
            <p className="text-2xl font-semibold mt-2 mb-2">From Your Speech</p>
            <TextArea/>
            <BigButton text='Generate Quizz' onClick={handleClickWrite}/>
            <Content/>
        </div>
    </div>
  )
}
export default Reading
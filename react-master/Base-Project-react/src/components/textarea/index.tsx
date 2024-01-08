import React from 'react'

type Props = {}

const TextArea = (props: Props) => {
  return (
    <textarea className='w-full h-36 border-solid border-gray-300 border-2 rounded p-2 mt-2' placeholder='Type or paste your topic here'></textarea>
  )
}

export default TextArea
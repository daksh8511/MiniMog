import React from 'react'

const BlackButton = ({btnTitle}) => {
  return (
    <div>
        <button className='bg-black text-white w-full p-2 cursor-pointer'>{btnTitle}</button>
    </div>
  )
}

export default BlackButton
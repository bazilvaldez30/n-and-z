import React from 'react'
import CreateNewFlavor from '../components/CreateNewFlavorForm'

export default function page() {
  return (
    <div className='grow flex px-6'>
      <div className='w-full text-center'>
        <CreateNewFlavor />
      </div>
    </div>
  )
}

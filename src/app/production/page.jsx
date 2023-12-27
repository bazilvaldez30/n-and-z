import React from 'react'
import CreateNewFlavor from '../components/CreateNewFlavorForm'
import FlavorsButton from '../components/FlavorsButton'
import MachineControls from '../components/MachineControls'

export default function page() {
  return (
    <>
      <MachineControls />
      <div className='grow flex px-6'>
        <FlavorsButton />
      </div>
    </>
  )
}

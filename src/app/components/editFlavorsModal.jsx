'use client'

import React, { useEffect, useState } from 'react'
import CreateNewFlavor from './CreateNewFlavorForm'
import FlavorsButton from './FlavorsButton'
import { Button, Modal, notification } from 'antd'
import api from '../api/api'

export default function EditButtonModal({ flavor }) {
  const [flavorInputs, setFlavorInputs] = useState({
    title: '',
    amount1: 0,
    amount2: 0,
    amount3: 0,
    amount4: 0,
    amount5: 0,
  })
  const [selectedTitle, setSelectedTitle] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setFlavorInputs(flavor)
    setSelectedTitle(flavor.title)
  }, [])

  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const handleInputChange = async (e) => {
    const name = e.target.name
    const value = e.target.value

    if (name == 'title') {
      setSelectedTitle(value)
    }

    setFlavorInputs((prev) => ({ ...prev, [name]: value }))
  }

  const handleUpdate = async (e) => {
    e.preventDefault()
    setLoading(true)

    const response = await api.patch(
      `/flavors/${selectedTitle}/update`,
      flavorInputs
    )

    if (response.status == 200) {
      notification['success']({
        message: 'Successfully updated!',
        placement: 'bottomLeft',
        duration: 2,
      })
      setIsModalOpen(false)
    } else {
      notification['error']({
        message: 'Something went wrong. Try again later or contact the admin',
        placement: 'bottomLeft',
        duration: 2,
      })
    }

    setLoading(false)
  }

  return (
    <>
      <button
        className='text-sm border-0 font-medium text-blue-500'
        type=''
        onClick={showModal}
      >
        Edit
      </button>
      <Modal
        title={`Edit ${flavor.title} Flavor`}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <form onSubmit={handleUpdate} className='space-y-6 text-start'>
          <div className='grid grid-cols-2 gap-3'>
            <div className='flex flex-col gap-2'>
              <label>Sugar</label>
              <input
                onChange={(e) => handleInputChange(e)}
                min={0}
                value={flavorInputs.amount1}
                name='amount1'
                type='number'
                placeholder='Amount in grams'
                className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500'
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label>Salt</label>
              <input
                onChange={(e) => handleInputChange(e)}
                min={0}
                value={flavorInputs.amount2}
                name='amount2'
                type='number'
                placeholder='Amount in grams'
                className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500'
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label>Pepper</label>
              <input
                onChange={(e) => handleInputChange(e)}
                min={0}
                value={flavorInputs.amount3}
                name='amount3'
                type='number'
                placeholder='Amount in grams'
                className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500'
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label>Paprika</label>
              <input
                onChange={(e) => handleInputChange(e)}
                min={0}
                value={flavorInputs.amount4}
                name='amount4'
                type='number'
                placeholder='Amount in grams'
                className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500'
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label>Magic sarap</label>
              <input
                onChange={(e) => handleInputChange(e)}
                min={0}
                value={flavorInputs.amount5}
                name='amount5'
                type='number'
                placeholder='Amount in grams'
                className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500'
              />
            </div>
          </div>
          <div className='flex justify-center gap-6'>
            <button type='submit' className='custom-button w-full'>
              Save
            </button>
          </div>
        </form>
      </Modal>
    </>
  )
}

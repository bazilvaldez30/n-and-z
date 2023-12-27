'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import api from '../api/api'
import { notification } from 'antd'
import { useRouter } from 'next/navigation'

export default function CreateNewFlavorForm() {
  const [flavorInputs, setFlavorInputs] = useState({
    name: '',
    ingredient1: 0,
    ingredient2: 0,
    ingredient3: 0,
    ingredient4: 0,
    ingredient5: 0,
  })

  const [loading, setLoading] = useState(false)

  const router = useRouter()

  const handleInputChange = async (e) => {
    const name = e.target.name
    const value = e.target.value

    setFlavorInputs((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData()
    formData.append('title', flavorInputs.name)
    formData.append('amount1', flavorInputs.ingredient1)
    formData.append('amount2', flavorInputs.ingredient2)
    formData.append('amount3', flavorInputs.ingredient3)
    formData.append('amount4', flavorInputs.ingredient4)
    formData.append('amount5', flavorInputs.ingredient5)
    const response = await api.post('/flavors/create', formData)

    if (response.status == 201) {
      notification['success']({
        message: 'New flavors successfully added!',
        placement: 'bottomLeft',
        duration: 2,
      })

      setFlavorInputs({
        name: '',
        ingredient1: 0,
        ingredient2: 0,
        ingredient3: 0,
        ingredient4: 0,
        ingredient5: 0,
      })
      setTimeout(() => {
        router.push('/flavors')
      }, 2000)
      return
    } else {
      notification['error']({
        message: `${response.data.title}`,
        placement: 'bottomLeft',
        duration: 2,
      })
    }

    setLoading(false)
  }

  const handleClear = (e) => {
    e.preventDefault()
    setFlavorInputs({
      name: '',
      ingredient1: 0,
      ingredient2: 0,
      ingredient3: 0,
      ingredient4: 0,
      ingredient5: 0,
    })
  }

  return (
    <div className='mx-auto w-full max-w-2xlpx-4 sm:px-6 lg:px-8 py-4 bg-white rounded-md shadow-lg min-h-[450px] flex flex-col justify-center space-y-6 my-4 p-7'>
      <div className='text-center'>
        <h3 className='text-[#800080]'>
          In this section, you can craft your own signature longganisa flavor
        </h3>
        <p>
          Explore new tastes and unleash your creativity by inventing unique combinations of spices,
          herbs, and other ingredients. Don&apos;t hesitate to experiment and create additional
          flavors to add a diverse array of delectable longganisa varieties to your culinary
          repertoire.
        </p>
      </div>
      <form onSubmit={handleSubmit} className='space-y-6 text-start'>
        <div className='flex flex-col gap-2'>
          <label>Flavor Name</label>
          <input
            onChange={(e) => handleInputChange(e)}
            value={flavorInputs.name}
            name='name'
            type='text'
            placeholder='Enter flavor name'
            className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500'
          />
        </div>
        <div className='grid grid-cols-2 gap-3'>
          <div className='flex flex-col gap-2'>
            <label>Sugar</label>
            <input
              onChange={(e) => handleInputChange(e)}
              min={0}
              value={flavorInputs.ingredient1}
              name='ingredient1'
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
              value={flavorInputs.ingredient2}
              name='ingredient2'
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
              value={flavorInputs.ingredient3}
              name='ingredient3'
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
              value={flavorInputs.ingredient4}
              name='ingredient4'
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
              value={flavorInputs.ingredient5}
              name='ingredient5'
              type='number'
              placeholder='Amount in grams'
              className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500'
            />
          </div>
        </div>
        <div className='flex justify-center gap-6'>
          <button onClick={handleClear} className='custom-button w-full max-w-[10rem]'>
            Clear
          </button>
          <button type='submit' className='custom-button w-full max-w-[10rem]' disabled={loading}>
            Create
          </button>
        </div>
      </form>
    </div>
  )
}

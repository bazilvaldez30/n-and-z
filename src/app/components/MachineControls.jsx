'use client'

import useToken from 'antd/es/theme/useToken'
import React, { useState } from 'react'
import api from '../api/api'
import { notification } from 'antd'

export default function MachineControls() {
  const [isGrinder, setIsGrinder] = useState('ON')
  const [isMixer, setIsMixer] = useState('ON')
  const [isTieing, setIsTeing] = useState('ON')

  const handleGrinder = async () => {
    if (isGrinder === 'OFF') setIsGrinder('ON')
    if (isGrinder === 'ON') setIsGrinder('OFF')

    const formData = new FormData()
    formData.append('action', isGrinder)

    try {
      const response = await api.post('/grinder', formData)
      if (response.status === 200) {
        if (response.data == 'ON') {
          notification['success']({
            message: 'Grinder is now running',
            placement: 'bottomLeft',
            duration: 2,
          })
        }
        if (response.data == 'OFF') {
          notification['success']({
            message: 'Grinder is now turned off',
            placement: 'bottomLeft',
            duration: 2,
          })
        }
      } else {
        setIsGrinder('ON')
        notification['error']({
          message: 'Something went wrong. Try again later or contact the admin',
          placement: 'bottomLeft',
          duration: 2,
        })
      }
    } catch (error) {
      console.error(error)
    }
  }

  const handleMixer = async () => {
    if (isMixer === 'OFF') setIsMixer('ON')
    if (isMixer === 'ON') setIsMixer('OFF')

    const formData = new FormData()
    formData.append('action', isMixer)

    try {
      const response = await api.post('/mixer', formData)
      if (response.status === 200) {
        if (response.data == 'ON') {
          notification['success']({
            message: 'Mixer is now running',
            placement: 'bottomLeft',
            duration: 2,
          })
        }
        if (response.data == 'OFF') {
          notification['success']({
            message: 'Mixer is now turned off',
            placement: 'bottomLeft',
            duration: 2,
          })
        }
      } else {
        setIsMixer('ON')
        notification['error']({
          message: 'Something went wrong. Try again later or contact the admin',
          placement: 'bottomLeft',
          duration: 2,
        })
      }
    } catch (error) {
      console.error(error)
    }
  }

  const handleTieing = async () => {
    if (isTieing === 'OFF') setIsTeing('ON')
    if (isTieing === 'ON') setIsTeing('OFF')

    const formData = new FormData()
    formData.append('action', isTieing)

    try {
      const response = await api.post('/tie', formData)
      if (response.status === 200) {
        if (response.data == 'ON') {
          notification['success']({
            message: 'Tying is now running',
            placement: 'bottomLeft',
            duration: 2,
          })
        }
        if (response.data == 'OFF') {
          notification['success']({
            message: 'Tying is now turned off',
            placement: 'bottomLeft',
            duration: 2,
          })
        }
      } else {
        setIsTeing('ON')
        notification['error']({
          message: 'Something went wrong. Try again later or contact the admin',
          placement: 'bottomLeft',
          duration: 2,
        })
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <div className=' space-y-5 py-10'>
        <div className='flex justify-between items-center max-w-[300px] mx-auto'>
          <label className='font-semibold tracking-wider'>Grinder</label>
          <label class='relative inline-flex items-center cursor-pointer'>
            <input
              onChange={handleGrinder}
              type='checkbox'
              checked={isGrinder === 'OFF' ? true : false}
              class='sr-only peer'
            />
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#800080]"></div>
            <span class='ms-3 text-sm font-medium text-gray-900 dark:text-gray-300'>
              Toggle
            </span>
          </label>
        </div>
        <div className='flex justify-between items-center max-w-[300px] mx-auto'>
          <label className='font-semibold tracking-wider'>Mixer</label>
          <label class='relative inline-flex items-center cursor-pointer'>
            <input
              onChange={handleMixer}
              type='checkbox'
              checked={isMixer === 'OFF' ? true : false}
              class='sr-only peer'
            />
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#800080]"></div>
            <span class='ms-3 text-sm font-medium text-gray-900 dark:text-gray-300'>
              Toggle
            </span>
          </label>
        </div>
        <div className='flex justify-between items-center max-w-[300px] mx-auto'>
          <label className='font-semibold tracking-wider'>
            Tie-ing Machine
          </label>
          <label class='relative inline-flex items-center cursor-pointer'>
            <input
              onChange={handleTieing}
              type='checkbox'
              checked={isTieing === 'OFF' ? true : false}
              class='sr-only peer'
            />
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#800080]"></div>
            <span class='ms-3 text-sm font-medium text-gray-900 dark:text-gray-300'>
              Toggle
            </span>
          </label>
        </div>
      </div>
    </>
  )
}

'use client'

import React, { useState } from 'react'
import api from '../api/api'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import { useAuthContext } from '../context/AuthContext'

export default function Page() {
  const { setIsAuthenticated } = useAuthContext()
  const [userInputs, setUserInputs] = useState({
    username: '',
    password: '',
  })

  const router = useRouter()

  const handleLogin = async (e) => {
    e.preventDefault()

    const response = await api.post('/auth/login/', userInputs)
    if (response.status === 200) {
      const token = response.data.access
      const refresh_token = response.data.refresh
      const user = JSON.stringify(response.data.user)
      Cookies.set('access', token)
      Cookies.set('refresh', refresh_token)
      Cookies.set('user', user)
      setIsAuthenticated(true)

      const return_path = Cookies.get('return_path')
      if (return_path) {
        router.push(return_path)
      } else {
        router.push('/')
      }
    } else if (response.status === 400) {
      console.log(response.data)
    }
  }

  const handleInputChange = (e) => {
    const inputName = e.target.name
    const value = e.target.value

    setUserInputs((prev) => ({ ...prev, [inputName]: value }))
  }

  console.log(userInputs)

  return (
    <form onSubmit={handleLogin} className='grow flex items-center px-6'>
      <div className='mx-auto w-full max-w-md px-4 sm:px-6 lg:px-8 py-8 bg-white rounded-md shadow-lg flex flex-col justify-center space-y-6'>
        <h1 className='text-center text-2xl font-bold text-purple-400'>
          N&Z Longganisa Maker
        </h1>
        <h2 className='text-lg font-semibold'>Sign in</h2>
        <div className='flex flex-col gap-7'>
          <input
            onChange={(e) => handleInputChange(e)}
            value={userInputs.username}
            name='username'
            type='text'
            placeholder='Username'
            className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
          />
          <input
            onChange={(e) => handleInputChange(e)}
            value={userInputs.password}
            name='password'
            type='password'
            placeholder='Password'
            className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
          />
        </div>
        <button className='custom-button bg-[#800080]' type='submit'>
          Log in
        </button>
      </div>
    </form>
  )
}

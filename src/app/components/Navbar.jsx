'use client'

import Cookies from 'js-cookie'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import api from '../api/api'
import { useAuthContext } from '../context/AuthContext'

export default function Navbar() {
  const { isAuthenticated, setIsAuthenticated, isAuthloading } =
    useAuthContext()

  const url = usePathname()
  const router = useRouter()

  const refresh = Cookies.get('refresh')

  const handleLogout = async () => {
    try {
      const response = await api.post('/auth/logout/', { refresh })
      if (response.status === 200) {
        Cookies.remove('access')
        Cookies.remove('refresh')
        Cookies.remove('user')
        setIsAuthenticated(false)
        router.push('/login')
      } else if (response.status === 400) {
        console.log(response.data)
      }
    } catch (error) {
      Cookies.remove('access')
      Cookies.remove('refresh')
      Cookies.remove('user')
      console.error(error)
    }
  }

  return (
    <nav className='bg-gray-800'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          <div className='flex items-center w-1/3'>
            <Link href={'/'} className='flex-shrink-0'>
              <img className='h-8 w-8' src='/Logo_LMM.png' alt='Your Company' />
            </Link>
          </div>
          <div className='flex justify-between md:justify-center w-1/3 tracking-widest'>
            <div className='flex items-baseline space-x-4'>
              <Link
                href='/'
                className={`${
                  url === '/' ? 'bg-gray-900' : ''
                } text-white rounded-md px-3 py-2 text-sm font-medium`}
                aria-current='page'
              >
                <span className='md:block hidden'>Dashboard</span>
                <span className='block md:hidden'>
                  <svg
                    fill='white'
                    xmlns='http://www.w3.org/2000/svg'
                    height='20'
                    width='22'
                    viewBox='0 0 576 512'
                  >
                    <path d='M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z' />
                  </svg>
                </span>
              </Link>
            </div>
            <div className='flex items-baseline space-x-4'>
              <Link
                href='/production'
                className={`${
                  url === '/production' ? 'bg-gray-900' : ''
                } text-white rounded-md px-3 py-2 text-sm font-medium`}
                aria-current='page'
              >
                <span className='md:block hidden'>Production</span>
                <span className='block md:hidden'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    height='20'
                    width='22'
                    viewBox='0 0 576 512'
                    fill='white'
                  >
                    <path d='M7.8 207.7c-13.1-17.8-9.3-42.8 8.5-55.9L142.9 58.5C166.2 41.3 194.5 32 223.5 32H384 544c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H507.2l-44.9 36c-22.7 18.2-50.9 28-80 28H304 288 224c-17.7 0-32-14.3-32-32s14.3-32 32-32h64 16c8.8 0 16-7.2 16-16s-7.2-16-16-16H183.4L63.7 216.2c-17.8 13.1-42.8 9.3-55.9-8.5zM382.4 160l0 0 .9 0c-.3 0-.6 0-.9 0zM568.2 304.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 453.5c-23.4 17.2-51.6 26.5-80.7 26.5H192 32c-17.7 0-32-14.3-32-32V384c0-17.7 14.3-32 32-32H68.8l44.9-36c22.7-18.2 50.9-28 80-28H272h16 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H288 272c-8.8 0-16 7.2-16 16s7.2 16 16 16H392.6l119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 352l0 0-.9 0c.3 0 .6 0 .9 0z' />
                  </svg>
                </span>
              </Link>
            </div>
            <div className='flex items-baseline space-x-4'>
              <Link
                href='/flavors'
                className={`${
                  url === '/flavors' ? 'bg-gray-900' : ''
                } text-white rounded-md px-3 py-2 text-sm font-medium`}
                aria-current='page'
              >
                <span className='md:block hidden'>Flavors</span>
                <span className='block md:hidden'>
                  <svg
                    fill='white'
                    xmlns='http://www.w3.org/2000/svg'
                    height='20'
                    width='20'
                    viewBox='0 0 512 512'
                  >
                    <path d='M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm64 0v64h64V96H64zm384 0H192v64H448V96zM64 224v64h64V224H64zm384 0H192v64H448V224zM64 352v64h64V352H64zm384 0H192v64H448V352z' />
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          <div className='flex justify-end w-1/3'>
            {isAuthloading ? (
              <div role='status'>
                <svg
                  aria-hidden='true'
                  className='inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300'
                  viewBox='0 0 100 101'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                    fill='currentColor'
                  />
                  <path
                    d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                    fill='currentFill'
                  />
                </svg>
                <span className='sr-only'>Loading...</span>
              </div>
            ) : (
              <div className='ml-4 flex items-center md:ml-6'>
                {isAuthenticated ? (
                  <button
                    onClick={handleLogout}
                    className='border-0 rounded-full p-3 text-gray-400 hover:text-white font-semibold'
                  >
                    LOGOUT
                  </button>
                ) : (
                  <Link
                    href={'/login'}
                    className='border-0 rounded-full p-3 text-gray-400 hover:text-white font-semibold'
                  >
                    LOGIN
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

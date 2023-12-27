'use client'

import React, { useEffect, useState } from 'react'
import api from '../api/api'
import Link from 'next/link'
import EditButtonModal from '../components/editFlavorsModal'
import { Popconfirm, notification } from 'antd'

export default function Page() {
  const [flavors, setFlavors] = useState([])

  const handleDeleteFlavor = async (name) => {
    const response = await api.delete(`/flavors/${name}/delete`)
    if (response.status == 200 || response.status == 204) {
      notification['success']({
        message: `${name} flavor is successfully deleted!`,
        placement: 'top',
      })
      fetchFlavors()
    } else {
      notification['error']({
        message: 'Something went wrong. Try again later or contact the admin',
        placement: 'top',
      })
    }
  }

  const fetchFlavors = async () => {
    try {
      const response = await api.get('/flavors/')
      const data = response.data
      if (response.status == 200) {
        setFlavors(data)
      } else {
        console.log(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchFlavors()
  }, [])

  return (
    <div className='relative  shadow-md sm:rounded-lg'>
      <table className='w-full text-sm text-left rtl:text-right text-gray-500'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 '>
          <tr>
            <th scope='col' className='px-6 py-3'>
              Name
            </th>
            <th scope='col' className='px-6 py-3'></th>
            <th scope='col' className='px-6 py-3'></th>
            <th scope='col' className='px-6 py-3'></th>
            <th scope='col' className='px-6 py-3 flex justify-end'>
              <Link href='/create-new-flavor' className='border-0' onClick={() => console.log}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='23'
                  width='21'
                  viewBox='0 0 448 512'
                >
                  <path
                    fill='#000'
                    d='M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z'
                  />
                </svg>
              </Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {flavors &&
            flavors.map((flavor, index) => {
              console.log(flavor)
              return (
                <tr className='bg-white border-b  hover:bg-gray-50' key={index}>
                  <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                    {flavor.title}
                  </th>
                  <td className='px-6 py-4'></td>
                  <td className='px-6 py-4'></td>
                  <td className='px-6 py-4'></td>
                  <td className='px-6 py-4 flex justify-end gap-3'>
                    <EditButtonModal flavor={flavor} />
                    <Popconfirm
                      okType='danger'
                      title='Delete the flavor'
                      description='Are you sure to delete this flavor?'
                      onConfirm={() => handleDeleteFlavor(flavor.title)}
                      okText='Yes'
                      cancelText='No'
                    >
                      <button className='text-sm border-0 font-medium text-red-600'>Delete</button>
                    </Popconfirm>
                  </td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}

'use client'

import Link from 'next/link'
import api from '../api/api'
import { useEffect, useState } from 'react'
import { notification } from 'antd'

export default function FlavorsButton() {
  const [flavors, setFlavors] = useState([])
  const [inProgress, setInProgress] = useState(false)

  const handleFlavorClick = async (e) => {
    setInProgress(true)
    const name = e.target.name
    const formData = new FormData()

    formData.append('flavor', name)
    const response = await api.post('/dispense', formData)
    if (response.status == 200) {
      notification['success']({
        message: 'Success',
        placement: 'bottomLeft',
        duration: 2,
      })
    } else {
      notification['error']({
        message: 'Something went wrong. Try again later or contact the admin',
        placement: 'bottomLeft',
        duration: 2,
      })
    }
    setInProgress(false)
  }

  useEffect(() => {
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
    fetchFlavors()
  }, [])

  return (
    <div className='flex flex-col space-y-4 mx-auto'>
      <h2 className='text-center'>Flavors</h2>
      {inProgress ? (
        <h1>In progress...</h1>
      ) : (
        <div class='flex flex-wrap justify-center gap-2'>
          {flavors &&
            flavors.map((flavor, index) => (
              <button
                key={index}
                onClick={handleFlavorClick}
                name={flavor.title}
                className='custom-button'
              >
                {flavor.title}
              </button>
            ))}
        </div>
      )}

      {/* <Link href={'/create-new-flavor'}>
        <button className='custom-button w-6/12'>Custom Flavor</button>
      </Link> */}
    </div>
  )
}

import Image from 'next/image'
import FlavorsButton from './components/FlavorsButton'

export default function Home() {
  return (
    <div className='grow flex px-6 py-8'>
      <div className='w-full text-center'>
        <div>
          <div className='flex justify-center'>
            <img
              src='/Logo_LMM.png'
              className=' w-32 h-auto flex items-center justify-center pb-10'
            />
          </div>
          <p className='font-serif'>
            Popular Filipino sausage known as longganisa has a big cultural and economic impact on
            the Philippines. It is an essential component in Filipino cooking, capturing the various
            regional tastes and styles found throughout the archipelago. Many people who work in the
            longganisa industry earn a living from the product&apos;s production and sale, which
            boosts the local economy. Longganisa&apos;s appeal also promotes culinary tourism by
            drawing tourists—both domestic and foreign—who are interested in sampling the diverse
            and complex flavors of Filipino cuisine
          </p>
        </div>
      </div>
    </div>
  )
}

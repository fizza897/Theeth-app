import Image from 'next/image'
import React from 'react'
import LOGO from "../../public/Images/photo1.avif"

const Header = () => {
  return (
    <>
    <div className='flex justify-between'>
      <div className='logo ml-9'>
        <Image src={LOGO} width={50} height={50} alt='abc'/>
      </div>
      <div className='mr-10'>
        <ul className='flex gap-4 text-lg'>
          <li>
            Home
          </li>
          <li>
            Contact
          </li>
          <li>
            Home
          </li>
        </ul>
      </div>
    </div>

    </>
  )
}

export default Header
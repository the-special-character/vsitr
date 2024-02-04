import React from 'react'
import WebIcon from '../../../public/icons/web.svg'

const ServiceCard = () => {
  return (
    <div className='p-8 flex flex-col gap-4 bg-red-100 rounded-md'>
        <WebIcon height={40} width={40} fill="red" />
        <h2>Web Development</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aliquam nisi rerum, quisquam obcaecati temporibus velit iste saepe hic repellendus?</p>
    </div>
  )
}

export default ServiceCard
import React from 'react'
import { Link } from 'react-router-dom'
import FOOTER_LINKS from '../assets/footer_links'
import { FOOTER_CONTACT_INFO } from '../assets/data'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className='h-96 px-20'>
      <div>
        <div className='flex justify-between m-10'>
          <Link to='/' className='mb-10 bold-20'>Shoppee</Link>
          <div>
            <h1 className='font-bold'>Learn More</h1>
            <ul className='text-gray-20 mt-5 flex flex-col gap-3'>
              <li>About us</li>
              <li>Categories</li>
              <li>Exchange Policy</li>
              <li>Order Now</li>
              <li>FAQ</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h1 className='font-bold'>Our Community</h1>
            <ul className='text-gray-20 mt-5 flex flex-col gap-3'>
              <li>Terms and Conditions</li>
              <li>Special Offers</li>
              <li>Customer Reviews</li>
            </ul>
          </div>

          <div>
            <h1 className='font-bold'>Contact Us</h1>
            <ul className='text-gray-50 mt-5 flex flex-col gap-3'>
              <li>Contact Number: 123-456-7890</li>
              <li>Email Address: info@shoppee.com</li>
            </ul>
          </div>

          <div className='flex flex-row gap-4'>
            <Link to='/'><FaFacebook/></Link>
            <Link to='/'><FaInstagram/></Link>
            <Link to='/'><FaTwitter/></Link>
            <Link to='/'><FaYoutube/></Link>
          </div>
        </div>
      </div>
      <div className='border-t-2  '></div>
      <div>
        <p className='text-center regular-14 text-gray-30 m-7'>2024 Shoppee | All rights reserved.</p>
      </div>
    </footer>
  )
}


export default Footer
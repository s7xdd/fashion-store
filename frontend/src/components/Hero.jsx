import React from 'react'
import { MdOutlineLocalOffer, MdStar } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import { FaStar } from 'react-icons/fa6'

const Hero = () => {
  return (
    <section className='relative bg-hero bg-cover bg-center bg-no-repeat h-screen w-full pb-12'>
    <div className='max_padd_container relative top-32 xs:top-52'>
      <h1 className='h1 capitalize max-w-[37rem]'>Digital Shopping Hub Junction</h1>
      <p className='text-gray-50 regular mt-6 max-w-[33rem] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ex magnam unde suscipit eligendi aut voluptatem. Non a mollitia voluptas recusandae tenetur praesentium rerum quaerat. Mollitia cupiditate obcaecati sit corporis?
      Pariatur alias optio accusantium distinctio, illo iure ipsam cum nihil, voluptas aut ipsum dolore rem animi repudiandae quis ex. Possimus nostrum nemo quibusdam dignissimos, temporibus nihil quia repudiandae maiores provident?
      Minus eius expedita temporibus porro, ipsa doloribus iste beatae exercitationem eos culpa recusandae perferendis? Enim ipsa esse impedit, dolores minus eum! Numquam soluta adipisci neque at veritatis, cumque vel facere.
      In, ipsa. Natus neque consectetur tenetur. Nostrum laudantium vitae quibusdam illo soluta, praesentium deleniti minus ad repellendus itaque quod, maxime autem obcaecati asperiores cum aspernatur libero atque repellat. Fugit, repudiandae.
      Eveniet molestias quod et repudiandae iste aspernatur, enim doloremque architecto perspiciatis error ut reprehenderit quidem esse facilis ipsum, sit delectus necessitatibus sed eius minus accusantium nihil accusamus magnam. Numquam, officiis.</p>

      <div className='flexStart items-center gap-x-4 my-10'>
        <div className='!regular-24 flexCenter gap-x-3'>
          <FaStar/>
          <FaStar/>
          <FaStar/>
          <FaStar/>
        </div>
        <div className='bold-16 sm:bold-20'>
          176k <span className='regular-16 sm:regular-20'>Excellent Reviews</span>
        </div>
      </div>

      <div className='max-xs:flex-col flex gap-2'>
        <NavLink to={''} className='btn_dark_rounded flexCenter'>Shop now</NavLink>
        <NavLink to={''} className='btn_dark_rounded flexCenter'><MdOutlineLocalOffer className='text-2xl'/>Offers</NavLink>
      </div>
    
    </div>
  </section>
  )
}

export default Hero
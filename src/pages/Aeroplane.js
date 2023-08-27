import React from 'react'
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import aeroimg from "../assets/aeroplane.jpg"
const Aeroplane = () => {
  return (
    <>
      <Navbar/>
      <Hero
      cname="about-hero"
          heroImg={aeroimg}
          btnclass="about-btnclass"
          btnclass2="btnclasshome"
          title="Hi Welcome to My Booking Side"
      />
      
    </>
  )
}

export default Aeroplane

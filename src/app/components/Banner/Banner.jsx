"use client"
import React, { useEffect, useRef, useState } from 'react'
import './banner.css'
import { motion, useAnimation } from 'framer-motion'

const Banner = () => {
  const [bannerVisible, bannerIsVisible] = useState(true)
  // const titleBanner = useAnimation();
  const subtitleBanner = useAnimation();
  const bannerRef = useRef(null);

  useEffect(() =>{
    const bannerTopOffset = bannerRef.current.offsetTop;

    const handleScroll = () => {
      if (window.scrollY > bannerTopOffset - window.innerHeight /1){
        bannerIsVisible(true);
      
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []); 

  useEffect(() => {
    const animateBanner = async () => {
      if (bannerVisible){
        // await titleBanner.start({
        //   opacity : 1,
        //   scale : 1,
        //   y : 0,
        //   transition : { duration : 0.5}
        // })
        await subtitleBanner.start({
          opacity : 1,
          transition : { duration : 0.4, delay : 0.2}
        })
      }
    }
    animateBanner();
  }, []);
  return (
    <section ref={bannerRef} className='banner'>
        <section className='banner_image'>
        </section>
        <h1>Greenz Ink Tattoo</h1>
        <h2>Studio de tatouage privé</h2>
    </section>
  )
}

export default Banner
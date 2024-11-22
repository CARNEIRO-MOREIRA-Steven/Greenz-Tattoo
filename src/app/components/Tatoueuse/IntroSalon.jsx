"use client";
import React, { useEffect, useRef, useState } from 'react';
import './intro_salon.css';
import { motion, useAnimation } from 'framer-motion';

const IntroSalon = () => {
  
  const [SalonVisible, SalonIsVisible] = useState(false);
  const firstSubtitleSalon = useAnimation();
  const secondSubtitleSalon =useAnimation();
  const firstAside = useAnimation();
  const secondAside = useAnimation();
  const firstAsideTittle = useAnimation();
  const firstAsideSubtittle = useAnimation();
  const firstAsideDescription = useAnimation();
  const firstAsideSubDescription = useAnimation();
  const secondAsideTittle = useAnimation();
  const secondAsideSubtittle = useAnimation();
  const secondAsideDescription = useAnimation();
  const secondAsideSubDescription = useAnimation();
  const SalonRef = useRef(null);
  
  useEffect(() => {
    const SalonTopOffset = SalonRef.current.offsetTop;

    const handleScroll = () => {
      // Vérifier si l'élément est visible dans la fenêtre
      if (window.scrollY > SalonTopOffset - window.innerHeight / 1.5) {
        SalonIsVisible(true);
      } else {
        SalonIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const animateSalon = async () => {
      if (SalonVisible) {
        await firstSubtitleSalon.start({
          opacity : 1,
          transition : {duration : 0.8}
        });
        await secondSubtitleSalon.start({
          opacity : 1,
          y : 0,
          transition : {duration : 0.5}
        });
        await firstAside.start({
          scale : 1,
          transition : {duration : 0.4}
        });
        await firstAsideTittle.start({
          opacity : 1 ,
          transition : {duration : 0.7 , delay : 0.2}
        });
        await firstAsideSubtittle.start({
          scale : 1,
          opacity :1 ,
          transition : {duration : 0.7 , delay : 0.2}
        });
        await firstAsideDescription.start({
          opacity : 1,
          x : 0,
          transition : {duration : 0.7, delay : 0.2}
        });
        await firstAsideSubDescription.start({
          opacity : 1,
          transition : {duration : 0.7 , delay : 0.2}
        });
        await secondAside.start({
          scale : 1,
          transition : {delay : 0.35, duration : 0.4}
        });
        await secondAsideTittle.start({
          opacity : 1 ,
          transition : {duration : 0.7 , delay : 0.2}
        });
        await secondAsideSubtittle.start({
          scale : 1,
          opacity :1 ,
          transition : {duration : 0.7 , delay : 0.2}
        });
        await secondAsideDescription.start({
          opacity : 1,
          x : 0,
          transition : {duration : 0.7 , delay : 0.2}
        });
        await secondAsideSubDescription.start({
          opacity : 1,
          transition : {duration : 0.7 , delay : 0.2}
        });
      }
    };

    animateSalon();
  }, [SalonVisible]); 

  return (
    <section defer className='intro_salon' ref={SalonRef}>
    <section className='intro_salon_content_title'>
        <aside className='design_title'><span></span><h2 className='intro_salon_title'>GREENZ INK TATTOO, C’EST</h2><span></span></aside>
        <motion.h3 animate={firstSubtitleSalon} initial={{opacity : 0}} className='intro_salon_subtitle'>Un salon de tatouage unique</motion.h3>
        <motion.h3 animate={secondSubtitleSalon} initial={{ y : -50, opacity : 0}} className='intro_salon_subtitle'>Au coeur de chauny</motion.h3>
        </section>
        <section className='intro_salon_container'>
          <motion.aside animate={firstAside} initial={{scale : 0}} className='intro_salon_content'>
            <motion.h2 animate={firstAsideTittle} initial={{opacity : 0}}>1 Tatoueuse</motion.h2>
            <motion.h2 animate={firstAsideSubtittle} initial={{opacity : 0, scale : 0}}>son Univers</motion.h2>
            <motion.p animate={firstAsideDescription} initial={{opacity : 0, x : -250}}>Black & grey.. La tatoueuse greenz ink tattoo propose un style de tatouage plein de caractere.</motion.p>
            <motion.p animate={firstAsideSubDescription} initial={{opacity : 0}}>Découvrez ses derniers tatouages sur sa page et réserver votre prochain tatouage</motion.p>
          </motion.aside>
          <motion.aside animate={secondAside} initial={{scale : 0}} className='intro_salon_content'>
          <motion.h2 animate={secondAsideTittle} initial={{opacity : 0}}>Un salon </motion.h2>
          <motion.h2 animate={secondAsideSubtittle} initial={{opacity : 0, scale : 0}}>de tatouage unique</motion.h2>
          <motion.p animate={secondAsideDescription} initial={{opacity : 0 , x : 250}}>Situé au cœur de Chauny</motion.p>
          <motion.p animate={secondAsideSubDescription} initial={{opacity : 0}}>Chaque création est réalisée avec passion et soin.</motion.p>
          </motion.aside>
        </section>
    </section>
  )
}

export default IntroSalon
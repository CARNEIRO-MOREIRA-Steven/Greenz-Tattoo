"use client";
import React, { useEffect, useRef, useState } from 'react';
import './intro_tatoueuse.css';
import { motion, useAnimation } from 'framer-motion';

const IntroTatoueuse = () => {
  
  const [TatoueuseVisible, TatoueuseIsVisible] = useState(false);
  const titleTatoueuse = useAnimation();
  const spanTitle = useAnimation();
  const subtitleTatoueuse = useAnimation();
  const firstTatoueuseDescription = useAnimation();
  const secondTatoueuseDescription = useAnimation();
  const photoProfil = useAnimation();
  const realisationsTitle = useAnimation();
  const firstTattoo = useAnimation();
  const secondTattoo = useAnimation();
  const thirdTattoo = useAnimation();
  const fourthTattoo = useAnimation();
  const fifthTattoo = useAnimation();
  const TatoueuseRef = useRef(null);

  useEffect(() => {
    const TatoueuseTopOffset = TatoueuseRef.current.offsetTop;

    const handleScroll = () => {
      if (window.scrollY > TatoueuseTopOffset - window.innerHeight / 1.5) {
        TatoueuseIsVisible(true);
      } else {
        TatoueuseIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);  

  useEffect(() => {
    const animateTatoueuse = async () => {
      if (TatoueuseVisible) {
        await titleTatoueuse.start({
          opacity: 1,
          transition: { duration: 0.7 }
        });
        await spanTitle.start({
          y : 0,
          transition: { duration: 0.5 }
        });
        await subtitleTatoueuse.start({
          opacity: 1,
          transition: { duration: 0.7 }
        });
        await photoProfil.start({
          scale : 1.1,
          transition: { delay: 0.2, duration : 0.4 }

        });
        await firstTatoueuseDescription.start({
          x : 0,
          opacity : 1,
          transition: { duration: 0.5}
        });
        await secondTatoueuseDescription.start({
          x : 0,
          opacity : 1,
          transition: { duration: 0.5}
        });
        
        await photoProfil.start({
          scale : 1
        });
        await realisationsTitle.start({
          opacity :1
        });
        await firstTattoo.start({
          y : 0,
          opacity : 1,
          transition: { duration: 0.75}
        });
        await secondTattoo.start({
          x : 0,
          opacity :1,
          transition: { duration: 0.75}
        });
        await thirdTattoo.start({
          y : 0,
          opacity :1,
          transition: { duration: 0.75}
        });
        await fourthTattoo.start({
          x :0,
          opacity :1,
          transition: { duration: 0.75}
        });
        await fifthTattoo.start({
          y :0,
          opacity :1,
          transition: { duration: 0.75}
        });
        await firstTattoo.start({
          scale : 1,
          transition : {duration : 0.5}
        })
      }
    };
    animateTatoueuse();
  }, [TatoueuseVisible]); 

  return (
      <section defer className='intro_tatoueuse' id="tatoueuse" ref={TatoueuseRef}>
        <motion.section className='intro_tatoueuse_content_title'>
          <aside className='design_title'>
            <motion.span animate={spanTitle} initial={{y : -100}}></motion.span>
            <motion.h3 
              animate={titleTatoueuse}
              initial={{ opacity: 0 }} 
              className='intro_tatoueuse_title'>
              Découvrez
            </motion.h3>
            <motion.span animate={spanTitle} initial={{y : -250}}></motion.span>
          </aside>
          <motion.h2 
            animate={subtitleTatoueuse}
            initial={{ opacity: 0 }} 
            className='intro_tatoueuse_subtitle'>
            Notre tatoueuse
          </motion.h2>
        </motion.section>
        <section className='intro_tatoueuse_container'>
          <section className='intro_tatoueuse_content'>
            <motion.img 
            animate={photoProfil}
            initial={{scale : 0}}
            className='photo_tatoueuse' src='./photo_profil.webp' alt="Tatoueuse" />
            <aside className='intro_aside'>
              <motion.p
              animate={firstTatoueuseDescription}
              initial={{x : -250, opacity:0}}
              className='intro_tatoueuse_description'>
                Paloma, La tatoueuse de Greenz Ink Tattoo propose différents styles de tatouage.
              </motion.p><br />
              <motion.p 
              animate={secondTatoueuseDescription}
              initial={{x : -250, opacity:0}}
              className='intro_tatoueuse_description'>
                Paloma a toujours dessiné depuis son plus jeune âge.
              </motion.p>
            </aside>
          </section>
          <section className='dernier_projet_image'>
            <motion.h2 animate={realisationsTitle} initial={{opacity : 0}} className='intro_realisation_title'>Dernières réalisations</motion.h2>
            <motion.aside animate={firstTattoo} initial={{y : -100, opacity :0, scale : 0.8}} className='section_last_tattoo'>
              <img className='first_tattoo' src="./tattoo_eclair.webp" alt="Tattoo 1" />
              <aside className='aside_2_tatoo'>
                <motion.img animate={secondTattoo} initial={{x :-50, opacity :0}} className='tattoo2' src="./tattoo2.webp" alt="Tattoo 2" />
                <div className='tattoo_overflow'>
                <motion.img animate={thirdTattoo} initial={{opacity :0, y : -100}} className='tattoo3' src="./tattoo3.webp" alt="Tattoo 3" /></div>
              </aside>
              <aside className='aside_2_tatoo'>
                <motion.img animate={fourthTattoo} initial={{opacity :0, x : -100}} className='tattoo4' src="./tattoo5.webp" alt="Tattoo 4" />
                <div className='tattoo_overflow'>
                <motion.img animate={fifthTattoo} initial={{opacity :0, y : -100}} className='tattoo5' src="./tattoo4.webp" alt="Tattoo 5" /></div>
              </aside>
            </motion.aside>
          </section>
        </section>
        <aside className='logo_bottom_container'>
            <img className='intro_tatoueuse_logo' alt='logo' src='./logo.png'></img>
          </aside>
    </section>
  );
}

export default IntroTatoueuse;

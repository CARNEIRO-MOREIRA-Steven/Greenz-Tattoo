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
      // Vérifier si l'élément est visible dans la fenêtre
      if (window.scrollY > TatoueuseTopOffset - window.innerHeight / 1.5) {
        TatoueuseIsVisible(true);
      } else {
        TatoueuseIsVisible(false); // Réinitialise si l'élément n'est pas visible
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
        await spanTitle.start({
          y : 0,
          transition: { duration: 0.5 }
        })
        await titleTatoueuse.start({
          opacity: 1,
          transition: { duration: 0.7 }
        });
        await subtitleTatoueuse.start({
          opacity: 1,
          transition: { duration: 1 }
        });
        await photoProfil.start({
          scale : 1.1
        });
        await firstTatoueuseDescription.start({
          x : 0,
          opacity : 1
        });
        await secondTatoueuseDescription.start({
          x : 0,
          opacity : 1
        });
        
        await photoProfil.start({
          scale : 1
        });
        await realisationsTitle.start({
          opacity :1
        });
        await firstTattoo.start({
          y : 0,
          opacity : 1
        });
        await secondTattoo.start({
          x : 0,
          opacity :1
        });
        await thirdTattoo.start({
          y : 0,
          opacity :1
        });
        await fourthTattoo.start({
          x :0,
          opacity :1
        });
        await fifthTattoo.start({
          y :0,
          opacity :1
        });
        await firstTattoo.start({
          scale : 1,
          transition : {duration : 0.5}
        })
      }
    };

    animateTatoueuse();
  }, [TatoueuseVisible]); 

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
          scale : 1
        });
        await firstAsideTittle.start({
          opacity : 1 ,
          transition : {duration : 0.5}
        });
        await firstAsideSubtittle.start({
          scale : 1,
          opacity :1 ,
          transition : {duration : 0.4}
        });
        await firstAsideDescription.start({
          opacity : 1,
          x : 0,
          transition : {duration : 0.6}
        });
        await firstAsideSubDescription.start({
          opacity : 1
        });
        await secondAside.start({
          scale : 1
        });
        await secondAsideTittle.start({
          opacity : 1 ,
          transition : {duration : 0.5}
        });
        await secondAsideSubtittle.start({
          scale : 1,
          opacity :1 ,
          transition : {duration : 0.4}
        });
        await secondAsideDescription.start({
          opacity : 1,
          x : 0,
          transition : {duration : 0.6}
        });
        await secondAsideSubDescription.start({
          opacity : 1
        });
      }
    };

    animateSalon();
  }, [SalonVisible]); 

  return (
    <section>
      <section className='intro_tatoueuse' id="tatoueuse" ref={TatoueuseRef}>
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
            className='photo_tatoueuse' src='./photo_profil.jpg' alt="Tatoueuse" />
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
              <img className='first_tattoo' src="./tattoo_eclair.png" alt="Tattoo 1" />
              <aside className='aside_2_tatoo'>
                <motion.img animate={secondTattoo} initial={{x :-50, opacity :0}} className='tattoo2' src="./tattoo2.png" alt="Tattoo 2" />
                <motion.img animate={thirdTattoo} initial={{opacity :0, y : -100}} className='tattoo3' src="./tattoo3.png" alt="Tattoo 3" />
              </aside>
              <aside className='aside_2_tatoo'>
                <motion.img animate={fourthTattoo} initial={{opacity :0, x : -100}} className='tattoo4' src="./tattoo5.png" alt="Tattoo 4" />
                <motion.img animate={fifthTattoo} initial={{opacity :0, y : -100}} className='tattoo5' src="./tattoo4.png" alt="Tattoo 5" />
              </aside>
            </motion.aside>
          </section>
        </section>
        <aside className='logo_bottom_container'>
            <img className='intro_tatoueuse_logo' src='./logo.png'></img>
          </aside>
    </section>
    <section className='intro_salon' ref={SalonRef}>
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
    </section>
  );
}

export default IntroTatoueuse;

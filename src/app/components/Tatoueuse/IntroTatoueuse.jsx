import React from 'react'
import './intro_tatoueuse.css'

const IntroTatoueuse = () => {
  return (
    <section>
    <section className='intro_tatoueuse'>
        <section className='intro_tatoueuse_content_title'>
        <aside className='design_title'>
          <span></span>
            <h3 className='intro_tatoueuse_title'>Découvrez</h3>
          <span></span>
          </aside>
          <h2 className='intro_tatoueuse_subtitle'>Notre tatoueuse</h2>
        </section>
        <section className='intro_tatoueuse_container'>
          <section className='intro_tatoueuse_content'>
            <img className='photo_tatoueuse' src='./photo_profil.jpg'></img>
            <aside className='intro_aside'>
            <p className='intro_tatoueuse_description'>Paloma, La tatoueuse de Greenz Ink Tattoo propose différents style de tatouage</p><br></br>
            <p className='intro_tatoueuse_description'>Paloma a toujours dessiné depuis son plus jeune âge</p>
            </aside></section>
          <section className='dernier_projet_image'>
          <h2 className='intro_realisation_title'>Dernières réalisations</h2>
          <aside className='section_last_tattoo'>
            <img className='first_tattoo' src="./tattoo_eclair.png" alt="" />
            <aside className='aside_2_tatoo'>
            <img className='tattoo2' src="./tattoo2.png" alt="" />
            <img className='tattoo3' src="./tattoo3.png" alt="tattoo" />
            </aside>
            <aside className='aside_2_tatoo'>
            <img className='tattoo4' src="./tattoo5.png" alt="" />
            <img className='tattoo5' src="./tattoo4.png" alt="tattoo" />
            </aside>
            </aside>
          </section>
        </section>
          <aside className='logo_bottom_container'>
            <img className='intro_tatoueuse_logo' src='./logo.png'></img>
          </aside>
    </section>
    <section className='intro_salon'>
    <section className='intro_salon_content_title'>
        <aside className='design_title'><span></span><h2 className='intro_salon_title'>GREENZ INK TATTOO, C’EST</h2><span></span></aside>
        <h3 className='intro_salon_subtitle'>Un salon de tatouage unique</h3>
        <h3 className='intro_salon_subtitle'>Au coeur de chauny</h3>
        </section>
        <section className='intro_salon_container'>
          <aside className='intro_salon_content'>
            <h2>1 Tatoueuse</h2>
            <h2>son Univers</h2>
            <p>Black & grey.. La tatoueuse greenz ink tattoo propose un style de tatouage plein de caractere.</p>
            <p>Découvrez ses derniers tatouages sur sa page et réserver votre prochain tatouage</p>
          </aside>
          <aside className='intro_salon_content'>
          <h2>Plus qu’un</h2>
          <h2>tattoo shop</h2>
          <p>Paloma est une vraie actrice dans l’univers Tattoo sur Chauny.</p>
          </aside>
        </section>
    </section>
    </section>
  )
}

export default IntroTatoueuse
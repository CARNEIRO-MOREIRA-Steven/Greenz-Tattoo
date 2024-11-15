"use client"
import React, { useEffect, useRef, useState } from 'react';
import './contact_accueil.css'
import { motion, useAnimation } from 'framer-motion';



const ContactForm= () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState ({
      name : "",
      email : "",
      tel : "",
      subject : "",
      message : "",
  });

  const [isSuccess, setIsSucces] = useState(false)

  const closeSend = (e) => {
    setIsSucces(false)
  }

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      console.log(formData);
  
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          console.log("Message envoyé avec succès !");
          setIsSucces(true)
          setFormData({
            name: "",
            email : "",
            subject: "",
            tel: "",
            message: "",
          });
        } else {
          console.error(
            "Une erreur s'est produite lors de l'envoi du formulaire :",
            response.status, 
            response.statusText         
            );
        }
      } catch (error) {
        console.error(
          "Une erreur s'est produite lors de l'envoi du formulaire :",
          error
        );
      } finally {
        setIsSubmitting(false);
      }
    };

    const [contactVisible, contactIsVisible] = useState(false);
    const contactTitle = useAnimation();
    const contactFirstInformation = useAnimation();
    const contactSecondInformation = useAnimation();
    const contactRef = useRef(null);

    useEffect(() => {
      const contactTopOffset = contactRef.current.offsetTop ;
      
      const handleScroll = () =>{
        if ( window.scrollY > contactTopOffset - window.innerHeight / 1.5) {
          contactIsVisible(true);
        } else {
          contactIsVisible (false);
        }
      }
        window.addEventListener ('scroll', handleScroll);

        return () => {
          window.removeEventListener ('scroll' , handleScroll)
        };
    }, []);

    useEffect(() => {
      const animateContact = async () => {
        if (contactVisible){
          await contactTitle.start({
            opacity : 1,
            scale : 1,
            transition : {duration : 0.7}
          });
          await contactFirstInformation.start({
            opacity : 1,
            x : 0, 
            transition : {duration : 1}
          });
          await contactSecondInformation.start({
            opacity : 1,
            y : 0,
            transition : {duration : 0.8}
          })
        }
      };
      animateContact();
    }, [contactVisible])
  
  return (
    <section className='contact_homepage' id='contact' ref={contactRef}>
      <section className='contact_homepage_container'>
        <section className='contact_container_title'>
        <aside className='contact_title'>
          <span></span>
            <h3 className='contact_title'>Vous êtes décidé ?</h3>
          <span></span>
          </aside>
          <motion.h2 animate={contactTitle} initial={{opacity : 0, scale : 0}} className='contact_subtitle'>Réserver votre prochain tatouage dès maintenant</motion.h2>
        </section>
      <section className='contact_informations_container'>
      <section className='contact_informations_content'>
        <motion.h2 animate={contactFirstInformation} initial={{x : 350, opacity : 0}}>Prendre rendez-vous au tattoo shop du lundi au vendredi de 9h à 11h et de 15h à 17h</motion.h2>
        <motion.h2 animate={contactSecondInformation} initial={{y : 150, opacity : 0}}>contactez-nous pour plus d’informations sur les tatouages ou autre ! </motion.h2>
      </section>
      <section className='contact_form_content'>
      <section className='container_form'>
      <section className='forms'>
      <form className='form_content' onSubmit={handleSubmit}>
      <div className='name'>
      <label htmlFor='name'>Nom prénom</label>
      <input id='name' type='text' name='name' value={formData.name} required onChange={handleChange}></input>
    </div>
    <div className='email'>
          <label htmlFor='email'>Email</label>
          <input autoComplete="email" id='email' type='email' name='email' value={formData.email} required onChange={handleChange}></input>
        </div>
    <div className='tel'>
      <div className='tel'>
        <label htmlFor='tel'>Téléphone</label>
        <input id='tel' type='text' name='tel' value={formData.tel}  required onChange={handleChange}></input>
      </div>
    </div>
        <div className='subject'>
        <label htmlFor="subject">Projet</label>
        <input type="text" id="subject" name="subject" value={formData.subject}  onChange={handleChange}></input>
        </div>
        <div className='message'>
          <label htmlFor='message'>Message</label>
          <textarea id='message' rows="10" name='message' value={formData.message} maxLength={1000} onChange={handleChange}></textarea>
        </div>
        <button type='submit' className='form_button'>{isSubmitting ? <>En cours...</> : "Envoyer"}</button>
        </form>
      </section>
      </section>
      </section>
      </section>
      </section>
    </section>
  )
}

export default ContactForm
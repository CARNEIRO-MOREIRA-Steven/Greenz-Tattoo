"use client"
import React, {useState} from 'react'
import './contact_accueil.css'



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

  
  return (
    <section className='contact_homepage' id='contact'>
      <section className='contact_homepage_container'>
        <section className='contact_container_title'>
        <aside className='contact_title'>
          <span></span>
            <h3 className='contact_title'>Vous êtes décidé ?</h3>
          <span></span>
          </aside>
          <h2 className='contact_subtitle'>Réserver votre prochain tatouage dès maintenant</h2>
        </section>
      <section className='contact_informations_container'>
      <section className='contact_informations_content'>
        <h2>Prendre rendez-vous au tattoo shop du lundi au vendredi de 9h à 11h et de 15h à 17h</h2>
        <h2>contactez-nous pour plus d’informations sur les tatouages ou autre ! </h2>
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
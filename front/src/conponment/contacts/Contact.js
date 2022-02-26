import React, { useRef } from 'react';
import './contact.css'
// import{ user_DDdwAx0hChInXGL2wUr41 } from '@emailjs/browser';
import emailjs from "emailjs-com"
const Contact = () => {
  

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'chezsoiID',  'user_DDdwAx0hChInXGL2wUr41')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      alert("message envoyee avec succes");
  };
  return <div>

    <section className='section12'>
   <header className='header'>
   </header>
</section>
<section className="contact">
    <div className='space'>

    <div className="box1">
<h6> Écrivez-nous
</h6>
<div className="forms12">
 
<form ref={form} >
  <div >
    <input type="text" placeholder="Nom et prenom" name='Nom et prenom'/>
    <input type="email"  placeholder="Email " name='Email'/>
  </div>
  <div >
    <textarea name="message" type="text"  placeholder="Message"></textarea>
  </div>  
  <input  type="submit" onSubmit={sendEmail} value="Envoyer" id="input-submit"/>
</form>
</div>
  </div>
  <div className='informations'>
<div className='text'>
<p>Adresse:</p>
<h6> Route Sokra km3</h6>
</div>
<div className='text'>
<p>Ville:</p>
<h6> Sfax</h6>
</div>
<div className='text'>
<p>Numero de telephone:</p>
<h6> +216 51 747 882</h6>
</div>
<div className='text'>
<p>Email:</p>
<h6>ChezSoi@gmail.com</h6>
</div>
  </div>
    </div>
  </section>
  </div>
};

export default Contact;
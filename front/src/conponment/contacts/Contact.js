import React from 'react';
import './contact.css'
const Contact = () => {
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
<div className="forms1">
 
<form >
  <div >
    <input type="text" placeholder="Name"/>
    <input type="email"  placeholder="Email address"/>
    <input type="text"  placeholder="Subject"/>
  </div>
  <div >
    <textarea name="message" type="text"  placeholder="Message"></textarea>
  </div>  
  <input type="submit" value="Envoyer" id="input-submit"/>
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
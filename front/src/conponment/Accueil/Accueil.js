import React from 'react';
import './Accueil.css'
const Aceuil = () => {
  return <div  >

<div >
  <div className='aceuil'>
    <div className='recherche'>
<h2>Recherche</h2>
<label> Arrivee</label>
<input type="date"/>
<label> Depart</label>
<input type="date"/>
<label for="tentacles">Adulte</label>

<input type="number" id="tentacles" name="tentacles"
       min="1" max="100"></input>
       <label for="tentacles">Enfant</label>

<input type="number" id="tentacles" name="tentacles"
       min="1" max="100"></input>
       <button> Recherche </button>

    </div>
  </div>
</div>

 </div>
};

export default Aceuil;

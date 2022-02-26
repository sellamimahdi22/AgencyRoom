import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { editchambre } from '../../redux/Actions/chambAction';
const Editchamb = () => {
  const { loading,chambres} = useSelector((state) => state.chambresreducer);
    // console.log(chambres);
    const [modalIsOpen, setIsOpen] = React.useState(false);
 const dispatch =useDispatch()
 const [title, setTitle] = useState(chambres.title)
const [type, setType] = useState('')
const [description, setDescription] = useState('')
const [confort, setConfort] = useState('')
const [imageUrl, setImageUrl] = useState([])
const [price, setPrice] = useState('')
const [dispo, setDispo] = useState('');

const handleEdit = (e) => {
  e.preventDefault();
  const editedchambre = {
    title,
    description,
    type,
    dispo,
    confort,
    imageUrl,
    confort,
    price,
  }
  dispatch(editchambre(editedchambre))
}

  return (
    <div className='di'>
      <div className='forms1'>
      <form>
<div class="group1">   
<input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            />
            <span class="highlight"></span>
      <span class="bar"></span>
                <label>Nom chambre </label>
</div>
<div class="group1">

          <input
            type="text"
            value={type}
            onChange={(e) => {
              setType(e.target.value);
            }}
            />
             <span class="highlight"></span>
      <span class="bar"></span>
                          <label>Type chambre </label>
            </div>
            <div class="group1">
          <input
            type="text"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            />
             <span class="highlight"></span>
      <span class="bar"></span>
                          <label>description chambre </label>
                          </div>
                          <div className='group1'>

          <input
            type="text"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            />
             <span class="highlight"></span>
      <span class="bar"></span>
             <label>Prix chambre </label>
            </div>
            <div className='group1'>

           <input
            type="text"
            value={confort}
            onChange={(e) => {
              setConfort(e.target.value);
            }}
            /> 
             <span class="highlight"></span>
      <span class="bar"></span>
            <label>confort chambre </label>
            </div>
            <div className='group1'>

           <input
            type="text"
            value={dispo}
            onChange={(e) => {
              setDispo(e.target.value);
            }}
            /> 
             <span class="highlight"></span>
      <span class="bar"></span>
            <label>dispo chambre </label>

            </div>
            <div className='group1'>

           <input
            type="url"
            value={imageUrl}
            onChange={(e) => {
              setImageUrl(e.target.value);
            }}
            /> 
             <span class="highlight"></span>
      <span class="bar"></span>
            <label>Image Url </label>

            </div>
            
            </form>
    </div>
    <button className='Addbtn' onClick={handleEdit}> edit </button>
    </div>
  )
}

export default Editchamb
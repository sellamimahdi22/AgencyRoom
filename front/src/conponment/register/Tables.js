import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deletechambre, getchambres } from '../../redux/Actions/chambAction'

import "./tables.css"
const Tables = ({chambre}) => {
const dispatch=useDispatch()
  return (
    <div>
    <table className='table1'>
  <tr>
  <th> {chambre.title} </th>
  <td>
  <Link className='link22'  to={`Edit/${chambre._id}`}>
    <button className='editbutton'>
  Modifier
  </button>
  </Link>
  </td>
  <td>
    <button className='editbutton'onClick={()=>{dispatch(deletechambre(chambre._id));dispatch(getchambres())}}>
      Effacer</button> </td>
  </tr>
  </table>
    </div>
  )
}

export default Tables
import moment from 'moment'
import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteExpense } from '../../redux/actions/expense';
import './card.css'

const Card = ({ item,notifySuccess }) => {
  const time = moment(item.created_at).fromNow();
  const dispatch = useDispatch();
  const handleDelete =()=>{
    dispatch(deleteExpense(item))
    notifySuccess();
  }


  return (
    <div className='card'>
      <div className='left'>
        <h3 className='title'>{item.title} </h3><span> ({item.categorie})</span>
        <p className='time'>{time}</p>
      </div>
      <div className='right'>
       <h4 className='amount'>₹{item.amount}</h4>
       <button className='delete-btn' onClick={handleDelete}>Delete</button>
       <Link to={`/edit-expense/${item.id}`} className='btn margin' >Edit</Link>
      </div>
    </div>
  )
}

export default Card
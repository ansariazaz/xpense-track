import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'
import './expenseList.css'
import emptylist from '../../assets/empty.png'
import { toast, ToastContainer } from 'react-toastify'
const ExpenseList = () => {
    const { expenseList: list,query } = useSelector((state) => state.expenses)
    const filteredList = list.filter(item=>item.title.includes(query))
const notifySuccess =()=>{
    toast.success("item deleted from list");
}
    return (
        <div>
             <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            {filteredList.length ? filteredList.map((item) => (
                <Card item={item} notifySuccess={notifySuccess} key={item.id} />
            )) : <div className='empty'>
                <img src={emptylist} alt='empty' className='empty-img' />
                <h2>Uh oh ! Your expense list is empty</h2>
            </div>}
        </div>
    )
}

export default ExpenseList
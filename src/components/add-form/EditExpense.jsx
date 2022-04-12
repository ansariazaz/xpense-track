import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { categories } from '../../constants/addExpense'
import down from '../../assets/down.svg'
import { addExpense, updateExpense } from '../../redux/actions/expense'
import './addForm.css'
import { useSelector } from 'react-redux';
import { useMatch, useNavigate, useParams } from "react-router-dom";
import SuccessModal from './SuccessModal';
const EditExpense = () => {
    const {id} = useParams();
    const data = useSelector((state) => state.expenses.expenseList)
    const newData= data.filter((e)=>{
       return e.id ===id
    });
   let value = newData[0]
   console.log(value)
    const [title, updateTitle] = useState(value.title);
    const [amount, updateAmount] = useState(value.amount);
    const [categorie, updateCategorie] = useState(value.categorie);
    const [catOpen, setCatOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [isUpdate,setIsUpdate]= useState(false)
    const cats = categories;
    const dispatch = useDispatch()
    const handleChange = (e) => {
        const { value, name } = e.target
        switch (name) {
            case "title":
                return updateTitle(value)
            case "amount":
                return updateAmount(value)
            default:
                break;
        }
    }
    const resetForm = () => {
        updateTitle("");
        updateAmount("");
        updateCategorie("")
    }
    const handleCat = (cat) => {
        updateCategorie(cat)
        setCatOpen(false)
    }
    const handleUpdate = () => {
        if (title === "" ||  amount<=0 || !categorie) {
            const notify = () => toast("Please enter valid data!");
            notify()
            return
        }
        const data = {
            id:id,
            title: title,
            amount: amount,
            categorie: categorie,
            created_at: value.created_at,
        }
        dispatch(updateExpense(data))
        resetForm();
        setIsUpdate(true)
        setModalOpen(true)
        notifySuccess();
        
    }
    const navigate = useNavigate()
    const hanldeCancel =()=>{
      navigate('/');
    }
    const notifySuccess =()=>{
        toast.success("item updated Successfully");
    }
  return (
    <div className='edit-form'>
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
        <SuccessModal  modalOpen={modalOpen} isUpdate={isUpdate}/>
     <div className="formItem">
                <label>Title:</label>
                <input type="text" name="title" className='input' placeholder='Give a name to your expenditure' value={title} onChange={handleChange} />
            </div>
            <div className="formItem" >
                <label>Amount:</label>
                <input type="number" className='input' name="amount" placeholder='Amount' value={amount} onChange={handleChange} />
            </div>
            <div className="item">
                <div className='angle' onClick={() => setCatOpen(!catOpen)}>
                    <div className='categories' >
                        <label>{categorie ? categorie : "categories"}</label>
                    </div>
                    <img src={down} alt='down' className='down' />
                </div>
                {catOpen &&
                    <div className='cat-item' >
                        {cats.map((cat) => (
                            <div onClick={() => handleCat(cat.title)} name="categories" className='cat' >{cat.title}</div>
                        ))}
                    </div>}
            </div>
            <div className="add-btn">
                <button onClick={handleUpdate} className='btn'>Update</button>
                <button onClick={hanldeCancel} className='btn margin'>Cancel</button>
            </div>    
    </div>
  )
}

export default EditExpense
import React from 'react'
import { useState } from 'react'
import style from './addForm.css'
import { categories } from '../../constants/addExpense'
import { useDispatch } from 'react-redux'
import { addExpense } from '../../redux/actions/expense'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import down from '../../assets/down.svg'
import SuccessModal from './SuccessModal'
const AddForm = () => {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState();
    const [categorie, setCategorie] = useState("");
    const [catOpen, setCatOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const cats = categories;
    const dispatch = useDispatch()
    const handleChange = (e) => {
        const { value, name } = e.target
        switch (name) {
            case "title":
                return setTitle(value)
            case "amount":
                return setAmount(value)
            default:
                break;
        }
    }
    const resetForm = () => {
        setTitle("");
        setAmount("");
        setCategorie("")
    }
    const handleCat = (cat) => {
        setCategorie(cat)
        setCatOpen(false)
    }
    const handleSubmit = () => {
        if (title === "" ||  amount<=0 || !categorie) {
            const notify = () => toast("Please enter valid data!");
            notify()
            return
        }
        const data = {
            id:new Date().getTime().toString(),
            title: title,
            amount: amount,
            categorie: categorie,
            created_at: new Date()
        }
        dispatch(addExpense(data))
        resetForm();
        setModalOpen(true)
    }
    return (
        <div className='add-form'>
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
            <SuccessModal modalOpen={modalOpen} />
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
                <button onClick={handleSubmit} className='btn'>Add</button>
            </div>
        </div>
    )
}

export default AddForm
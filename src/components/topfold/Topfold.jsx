import React from 'react'
import './topfold.css'
import icon from '../../assets/search.svg'
import plus from '../../assets/plus.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { searchExpense } from '../../redux/actions/expense'
const Topfold = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setQuery(e.target.value);
        dispatch(searchExpense(e.target.value))
    }
    return (
        <div className='topfold'>
            {window.location.pathname === '/' ? <div className="content">
                <div className="left-top">
                    <div className="search-bar">
                        <div className="icon">
                            <img src={icon} alt="icon" />
                        </div>
                        <div className="search">
                            <input type="text" placeholder='Search for expense' value={query} onChange={handleChange} />
                        </div>
                    </div>
                </div>
                <Link to='/add-expense'>
                    <div className="right-top">
                        <button className="add"><img src={plus} alt="icon" />Add</button>
                    </div>
                </Link>
            </div> :
                <div className='add-topfold'>
                    <Link to='/'>
                        <div className="back">
                            <button className='btn'>Back</button>
                        </div>
                    </Link>

                    <Link to='/'>
                        <div className="cancel">
                            <button className='btn'>Cancel</button>
                        </div>
                    </Link>
                </div>}
        </div>
    )
}

export default Topfold
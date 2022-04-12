
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import EditExpense from './components/add-form/EditExpense';
import Header from './components/header/Header';
import AddExpense from './pages/add-expense/AddExpense';
import Home from './pages/home/Home';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/add-expense" exact element={<AddExpense />} />
        <Route path="/edit-expense/:id" exact element={<EditExpense />} />
      </Routes>
    </Router>
  );
}

export default App;

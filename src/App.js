import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home';
import NotFound from './components/Shared/NotFound';
import Login from './components/SignUp/Login';
import RequireAuth from './components/SignUp/RequireAuth';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;

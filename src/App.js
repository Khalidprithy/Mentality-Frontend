import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Header/Navbar';
import Blog from './components/Pages/Blog/Blog';
import Home from './components/Pages/Home/Home';
import Post from './components/Pages/Post/Post';
import NotFound from './components/Shared/NotFound';
import Login from './components/SignUp/Login';
import RequireAuth from './components/SignUp/RequireAuth';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/post' element={
          <RequireAuth>
            <Post></Post>
          </RequireAuth>}>
        </Route>
        <Route path='/blog' element={
          <RequireAuth>
            <Blog></Blog>
          </RequireAuth>}>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;

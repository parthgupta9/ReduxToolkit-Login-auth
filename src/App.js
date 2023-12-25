import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import { ToastContainer } from 'react-toastify';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
import Store from './store/Store';
import Search from './components/Search';


function App() {
  return (
    <div className="App">
      <ToastContainer position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light">

</ToastContainer>
<Provider store={Store}>
<BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/Cart' element={<Cart/>}></Route>

        {/* <Route path='/' element={<Registration/>}></Route> */}
      </Routes>
      </BrowserRouter>
      <Search/>
</Provider>
     
    </div>
  );
}

export default App;

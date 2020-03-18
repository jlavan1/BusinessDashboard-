import React from 'react';
// import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter , Switch, Route, Link } from 'react-router-dom';
import Nav from './components/Navbars/NavBar'
import Main from './components/main/main'
import Signin from './components/userlogin/signin'
import Signup from './components/userlogin/signup'
import Profile from './components/main/profile'
import Footer from './components/footer/footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css';
import './App.css'

function App() {


  return (
    <div className='App'>
    <BrowserRouter>
  <Nav/>
  <Route exact path='/' component={Main}/>
<Route exact path='/signin' component={Signin}/>
<Route exact path='/signup' component={Signup}/>
<Route exact path="/profile" component={Profile}/>
<Footer/>
</BrowserRouter>
    </div>
  );
}

export default App;

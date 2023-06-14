
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";

import { ContextLanguage } from '../Context/Languages';

export default function Header (){
  const {Lang , setLang} = useContext(ContextLanguage)
  console.log(Lang);
    
  const counter = useSelector((state) =>
    state.counter.counter_value)

    return(
      <nav className="navbar bg-dark border-bottom border-bottom-dark" data-bs-theme="dark" >
        <Container >
          <Navbar.Brand >Movies</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className='nav-link'exact activeClassName='is-active' to="/">Home</NavLink>
            <NavLink className='nav-link'  activeClassName='is-active' to="/counter">Counter : <span className="text-uppercase text-danger"> { counter}</span></NavLink>
            <NavLink className='nav-link' activeClassName='is-active' to="/login">Login</NavLink>
            <NavLink className='nav-link'activeClassName='is-active' to="/register">Register</NavLink>
            <button className="btn btn-warning" onClick={()=>{
                    setLang (Lang === 'ar' ? 'en' : 'ar')
                }}><span className="text-uppercase">{Lang}</span></button>
          </Nav>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        </Container>
        </nav>
      // </Navbar>

    )
}
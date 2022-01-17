import React from 'react';
import { useSelector } from 'react-redux';
import logo from '../../assets/Ativo1.svg';
import { Link } from 'react-router-dom';
import './header.css';

export default function Header() {
  const reserveSize = useSelector(state => state.reserve.length);
 return (
   <header className='container'>
       <Link to={'/'}>
   <img className='logo' src={logo} alt='Logomarca'/>
   </Link>
   
   <Link className='reservas' to={'/reservas'}>
      <div>
       <strong>Minhas reservas</strong>
       <span>{reserveSize} reservas</span>
      </div>
      </Link>
       
   </header>
 );
}
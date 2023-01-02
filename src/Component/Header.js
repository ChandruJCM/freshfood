import React,{} from 'react';
import Logo from '../Assets/Images/Home/logo.jpg';
import '../Styles/Header.css';

function Header() {
  return (
    <>
    <div className="container-fluid top">
      <div className="row bottom ms-5"><img src={Logo} alt='top'></img>
      </div>
    </div>
    </>
  )
}
export default Header;
import React from 'react'

import Logo from '../Assets/Images/Home/logo.jpg'
import BG from '../Assets/Images/Home/bg.jpg'
import Cart from '../Assets/Images/Home/Cart.jpg'
import {FiMenu} from 'react-icons/fi'
import '../Styles/Home.css';

export default function Home() {
  return (
    <div className="container-fluid ">
       <div className="container d-flex  top1">
      <div className="row w-25 d-flex bottom"><img src={Logo} alt='top'></img>
      </div>
      <div className="d-flex justify-content-end"><img src={FiMenu}></img></div>
      
    </div>
  
      <div className="container-fluid d-flex justify-content-center T">
            <div className="row">
              <div className="  head justify-content-center d-flex flex-column ">
                <p className="F ">FRESH FOOD</p>
                <p className="S font-family-great-vibes">Organic</p>
                <p className="H">How your food is grown or raised can have a major impact on your mental and emotional health as well as the environment.</p>
               <button type='button' className=" Button w-50">LEARN MORE</button>
              </div>
              </div>
              <div className="Main d-flex ">
                <img className="photo" src={Cart} alt={Cart}/>
              </div>
            </div>
            <div className='container-fluid  howit'>
                <div className='container'>
                <h1 className='d-flex justify-content-center'>How It Works?</h1>
                <p>Organic agriculture, which is governed by strict government standards, requires that products bearing the organic label are produced without the use of toxic and persistent pesticides and synthetic nitrogen fertilizers, antibiotics, synthetic hormones, genetic engineering or other excluded practices, sewage sludge, or irradiation.</p>
                </div>
            </div>
    </div>
  )
}

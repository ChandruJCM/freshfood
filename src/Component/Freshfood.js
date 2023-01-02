import React from 'react'
import '../Styles/Freshfood.css';
import Cart from '../Assets/Images/Home/Cart.jpg';


function Freshfood() {
  return (
            <div className="container-fluid d-flex justify-conter-center T">
            <div className="row">
              <div className="col-lg-12 head">
                <p className="F">FRESH FOOD</p>
                <p className="S">Organic</p>
                <p className="H">How your food is grown or raised can have a major<br/> impact on your mental and emotional health as well as<br/> the environment.</p>
               <button className="Button">LEARN MORE</button>
              </div>
              </div>
              <div className="Main">
                <img className="photo" src={Cart} alt={Cart}/>
              </div>
            </div>
    
  )
}
export default Freshfood;
import React from 'react'
import Card from '../Component/Card';
import Logo from '../Assets/Images/Home/logo.jpg';
import BG from '../Assets/Images/Home/bg.jpg';
import Cart from '../Assets/Images/Home/Cart.jpg';
import Sheep from '../Assets/Images/Home/Sheep.jpg';
import Berry from '../Assets/Images/Home/Strawberry.jpg';
import Fruits from '../Assets/Images/Home/veg.jpeg';
import Promise from '../Assets/Images/Home/Promise.jpg';
import { FaLeaf } from 'react-icons/fa';
import { SiHappycow} from 'react-icons/si';
import { GiFarmTractor } from 'react-icons/gi';
import {FiMenu} from 'react-icons/fi';
import '../Styles/Home.css';

export default function Home() {
  return (
    <div className="container-fluid ">
       <div className="container-fluid top justify-content-between">
      <div className="row d-flex bottom ms-5"><img src={Logo} alt='top'></img>
      </div>
      <div className="d-flex "><img src={FiMenu}></img></div>
      
    </div>
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
            <div className="container-fluid end">
        <div className="row">
            <h1>How It Works ?</h1>
            <p className="para">Organic agriculture, which is governed by strict government standards, requires that products bearing the organic label are produced without <br/>the use of toxic and persistent pesticides and synthetic nitrogen fertilizers, antibiotics, synthetic hormones, genetic engineering or other excluded <br/> practices, sewage sludge, or irradiation.</p>
        </div>
        <br/><br/>
        <div className="container-fluid ">
            <div className="row">
                <div className="col-md-4 ">
                    <div className="card picture">
                     <img src={Sheep} alt={Sheep}/>
                        </div>
                    </div>
                <div className="col-md-4 d-flex justify-content-center">
                    <div className="card ">
                        <div className="card-body text-black second ">
                            <h1 className="icon m-4">{<FaLeaf/>}</h1>
                            <h3 className="Organic">Organic Farming</h3>
                            <p className="para">Organic farming practices reduce<br/> pollution, conserve water, reduce soil<br/>erosion, increase soil fertility, and use less<br/> energy, is also better for birds</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card picture">
                    <img src={Berry} alt={Berry}/>
                    </div>
                    </div>
                </div>        
            </div>
            <br/><br/>
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-md-4 ">
                        <div className="card second ">
                        <div className="card-body text-black ">
                        <h1 className="icon m-4">{<SiHappycow/>}</h1>
                            <h3 className="Organic">Animal Husbandry</h3>
                            <p className="para fw-lighter">The animal production system, may be broadly classified as traditional,<br/> conventional and organic with their<br/> distinct characteristics.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                     <div className="card picture ">
                        <img className="dead" src={Fruits} alt={Fruits}/>
                    </div>
                </div> 
                    <div className="col-md-4 ">
                        <div className="card second ">
                         <div className="card-body text-black">
                         <h1 className="icon m-4">{<GiFarmTractor/>}</h1>
                            <h3 className="Organic">Arabel Farming</h3>
                                <p className="para">Organic foods often have more beneficial nutrients, such as antioxidants, than their conventionally-grown counterparts and people with allergies to foods</p>
                            </div>
                        </div>
                    </div>
                </div>        
            </div>
        </div>
                               <div className='d-flex mt-5'>
                                <div className='d-flex col-md-6'>
                                  <img src={Promise} alt={Promise}></img>
                          
                                </div>
                                <div className='d-flex col-md-6'>
                                  <p className="F">ORGANIC FARM </p>
                <p className="S">Our Promise</p>
                <p className="H">How your food is grown or raised can have a major<br/> impact on your mental and emotional health as well as<br/> the environment.</p>
               <button className="Button">LEARN MORE</button>
               </div>

                               </div>
    </div>
  )
}

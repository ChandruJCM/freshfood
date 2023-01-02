import React from 'react'
import '../Styles/Howitworks.css';
import Sheep from '../Assets/Images/Home/Sheep.jpg';
import Berry from '../Assets/Images/Home/Strawberry.jpg'
import Fruits from '../Assets/Images/Home/veg.jpeg'
import { FaLeaf } from "react-icons/fa";
import { SiHappycow} from "react-icons/si";
import { GiFarmTractor } from "react-icons/gi";


function Howitworks() {
  return (
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
                    <div className="card second rounded-0">
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
                        <div className="card second rounded-0">
                        <div className="card-body text-black ">
                        <h1 className="icon m-4">{<SiHappycow/>}</h1>
                            <h3 className="Organic">Animal Husbandry</h3>
                            <p className="para fw-lighter">The animal production system, may be broadly classified as traditional,<br/> conventional and organic with their<br/> distinct characteristics.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                     <div className="card picture rounded-0">
                        <img className="dead" src={Fruits} alt={Fruits}/>
                    </div>
                </div> 
                    <div className="col-md-4 ">
                        <div className="card second rounded-0">
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
  )
}
export default Howitworks;
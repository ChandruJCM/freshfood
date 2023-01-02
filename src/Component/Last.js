import React from 'react'
import '../Styles/Last.css'
import last from '../Assets/Images/Home/Organic farm of organic food.jpg'

function Last() {
  return (
    <div className="container-fluid">
        <div className="row">
         <div className="col-6">
            <h3 className="last">ORGANIC FARM</h3>
            <p className="O">Of Organic Food</p>
            <p className="P">Organic principles and regulations are also designed to <br/>ensure that animals are treated humanely, or, to be <br/>brutally honest, as humanely as possible.<br/>There are strict rules on the way in which animals are<br/> housed, guaranteeing a degree of comfort for the <br/>animals. But when it comes to vegetables, the situation is<br/> quite different.</p>
            <button className="button">LEARN MORE</button>
        </div>
            <div className="col-6">
            <img src={last} width="101%" height="99%"alt={last}/>
            
        </div>
        </div>
        </div>

  )
}
export default Last
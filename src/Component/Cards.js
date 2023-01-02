import React from 'react'
import '../Styles/Cards.css'
import Card1 from '../Assets/Images/Home/Card1.jpg'
import Card2 from '../Assets/Images/Home/Card2.jpg'
import Card3 from '../Assets/Images/Home/Card3.jpg'

function Cards() {
  return (
    <div className="home">
    <div className="container round ">
  <div className="row">
    <div className="col-4">
        <div class="card rounded-0">
  <img src={Card1} class="rounded-circle leaves"alt="..."/>
  <div className="card-body text-center">
    <h4 className="card-title fw-light pb-4">Fresh Fruits</h4>
    <p className="card-text fs-5">The secret is using fresh, seasonal  produce in combination with good quality oils, vinegars or dairy. We  choose the organic lifestyle because</p>
    <span className="Learn">LEARN MORE</span>
  </div>
</div></div>
    <div className="col-4">
        <div className="card rounded-0">
  <img src={Card2} class="rounded-circle leaves" alt="..."/>
  <div className="card-body text-center">
    <h4 className="card-title fw-light pb-4">Vegetables</h4>
    <p className="card-text  fs-5">We have all been listening to our  mothers saying: eat your vegetables. Scientists also agree: we need to eat 5 portions of vegetables to stay healthy.</p>
    <span className="Learn">LEARN MORE</span>
  </div>
</div></div>
    <div className="col-4">
        <div class="card rounded-0">
  <img src={Card3} class="rounded-circle leaves" alt="..."/>
  <div className="card-body text-center">
    <h4 className="card-title fw-light pb-4">Salad Leaves</h4>
    <p className="card-text fs-5 ">One way to motivate yourself to eat<br/> more salad this summer is to have a tasty, homemade dressing drizzled on top. Organic food popularity</p>
     <span className="Learn">LEARN MORE</span>  
  </div>
        </div>
    </div>
    <div className="by text-center fs-5 pt-4 fw-normal">Images by <span className="text-decoration-underline fw-bold Freepik">Freepik</span></div>
  </div>
</div>
</div>
  )
}
export default Cards;
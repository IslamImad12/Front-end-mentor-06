import React, { useState } from 'react';
import {bootstrap} from './css/bootstrap.min.css'
import {cart1} from './css/Cart1.css'
import { Link } from 'react-router-dom'
import Cart2 from './Cart2'
import image1 from './images/illustration-thank-you.svg'

export default function Cart1() {
  
  const [num, setNum] = useState(0);
  const click1 = () => {
    setNum(1);
  };
  const click2 = () => {
    setNum(2);
  };
  const click3 = () => {
    setNum(3);
  };
  const click4 = () => {
    setNum(4);
  };
  const click5 = () => {
    setNum(5);
  };
  let paragraph = document.getElementById('paragraph-1');
  let par2 = document.getElementById('par2');
  let par3 = document.getElementById('par3');
  let how = document.getElementById('how');

  let submit = document.getElementById('submit');

  const [showImage, setShowImage] = useState(false);
  // const sub = () => {
  //   setShowImage(true);
  // };

  function sub(){
    paragraph.innerHTML = `You selected ${num} out of 5`;
    par2.innerHTML = 'Thank you!'
    par3.innerHTML = 'We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!'
    how.innerHTML = ''
    setShowImage(true);
  }
  return <>
    <div className="container d-flex justify-content-center my-5">
    <div className="rating w-50 p-4">
      <h1 className="my-2" id='how'>How did we do?</h1>
      {showImage && <img src={image1} className="mx-auto d-block" alt="" />}
      <p className="paragraph-1 my-4" id='paragraph-1'>
        Please let us know how we did with your support request. All feedback is appreciated 
        to help us improve our offering!
      </p>
      <p id='par2'></p>
    
      <div className="num my-4 d-flex justify-content-center " id='par3'>
        <button className="btn mx-1 number" id="num1" onClick={click1}>1</button>
        <button className="btn mx-1 number" id="num2" onClick={click2}>2</button>
        <button className="btn mx-1 number" id="num3" onClick={click3}>3</button>
        <button className="btn mx-1 number" id="num4" onClick={click4}>4</button>
        <button className="btn mx-1 number" id="num5" onClick={click5}>5</button>
      </div>

    
      {!showImage && (
          <div className="d-flex justify-content-center">
            <button className="btn btn-primary btn-one my-2" onClick={sub}>Submit</button>
          </div>
        )}
    </div>
  </div>
  </>
  
}


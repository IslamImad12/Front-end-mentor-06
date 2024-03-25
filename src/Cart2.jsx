import React from 'react'

export default function Cart2(props) {
  return <>
    <div class="container d-flex justify-content-center my-5">
    <div class="rating w-50 p-4">
      {/* <img src="images/icon-star.svg" class="mx-2 star" alt=""> */}
      <h1 class="my-2">Thank you state start</h1>

      <p class="paragraph-2 my-4">
          You selected {props.num}  out of 5
      </p>
    

    
      <div class="d-flex justify-content-center">
        <button class="btn btn-primary btn-one my-2 ">Submit</button>
      </div>
    </div>
  </div>
  </>
}

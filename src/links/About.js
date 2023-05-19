import React from 'react'
import "../styles/about.css";

export default function About() {
  return (
    <>    
    <div class="row">
  <div class="column">
    <div class="card">
      <img src="img1.jpg" />
      <div class="container">
        <h2>Dr. Ashish Sabharwal</h2>
        <p class="title">Bc.S., Psychologist  </p>
        {/* <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p> */}
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="img2.jpg" />
      <div class="container">
        <h2>Dr. Sudhansu Bhattacharyya</h2>
        <p class="title">Psychologist</p>
        {/* <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p> */}
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="img3.jpg" />
      <div class="container">
        <h2>Dr. Aditya Gupta</h2>
        <p class="title">Bc.S., Psychologist </p>
        {/* <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p> */}
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
</div> 
  </>

  )
}

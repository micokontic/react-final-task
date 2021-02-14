import React from 'react'
import './FlipCard.css'

function FlipCard() {
    return (
        <div className="flip-card-container">
  <div className="flip-card">

    <div className="card-front">
      <figure>
        <div className="img-bg"></div>
        <img src="https://images.unsplash.com/photo-1486162928267-e6274cb3106f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Brohm Lake"></img>
        <figcaption>Splavarenje Tarom</figcaption>
      </figure>

      <ul>
        <li>Detail 1</li>
        <li>Detail 2</li>
        <li>Detail 3</li>
        <li>Detail 4</li>
        <li>Detail 5</li>
      </ul>
    </div>

    <div className="card-back">
      <figure>
        <div className="img-bg"></div>
        <img src="https://images.unsplash.com/photo-1486162928267-e6274cb3106f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Brohm Lake"></img>
      </figure>

      <button>Book</button>

      <div className="design-container">
        <span className="design design--1"></span>
        <span className="design design--2"></span>
        <span className="design design--3"></span>
        <span className="design design--4"></span>
        <span className="design design--5"></span>
        <span className="design design--6"></span>
        <span className="design design--7"></span>
        <span className="design design--8"></span>
      </div>
    </div>

  </div>
</div>
    )
}

export default FlipCard

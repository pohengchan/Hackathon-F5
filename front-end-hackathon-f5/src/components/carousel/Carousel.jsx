import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

function IndividualIntervalsExample() {
  return (
    <Carousel variant="dark">
      <Carousel.Item interval={1000}>
        <div>
          <img
            className="d-block w-100"
            src="./src\assets\images\Rectangle 234.png"
            alt="First slide"
          />
        </div>
        <Carousel.Caption>
          <h3>Unique Books</h3>
          <p>
            RareBooks is a marketplace where you find the most unique
            second-hand books, research-technical manual and special edition
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="./src\assets\images\Rectangle 234 (1).png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>What you can do</h3>
          <p>You have access to the most especials vendors</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/3/alejandroescamilla-book.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1562&q=80"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Get in contact</h3>
          <p>Welcome to our community of book connoisseurs!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default IndividualIntervalsExample

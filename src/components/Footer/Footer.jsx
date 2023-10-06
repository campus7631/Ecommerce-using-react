import React from "react"
import "./style.css"
import { Col, Container, Row } from "react-bootstrap"
import context from "react-bootstrap/esm/AccordionContext"
import pic from "./debo.jpg";

const Footer = () => {
  return (
    <footer>
        <Container>
          <Row className="footer-row">
            <Col md={3} sm={5} className='box'>
              <div className="logo">
                  <ion-icon name="bag"></ion-icon>
                  <h1>Jodhpur-Mart</h1>
              </div>
              <p>Jodhpur Mart is a newly established e-commerce platform. It facilitates online buying and selling of various products and services. Users can browse, select, and purchase items securely, with features like product listings, search options, secure payments, and customer support. </p>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>About Us</h2>
              <ul>
                <li>Careers</li>
                <li>Our Stores</li>
                <li>Our Cares</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
            
 
  {/* <img src={pic}/> */}

              

              </ul>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>Customer Care</h2>
              <ul>
                <li>Help Center </li>
                <li>How to Buy </li>
                <li>Track Your Order </li>
                <li>Corporate & Bulk Purchasing </li>
                <li>Returns & Refunds </li>
              </ul>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>Contact Us</h2>
              <ul>
              <li>   <img src={pic}/></li>
                <li>JIET </li>
                <li>Email: devikasinha23@gmail.com</li>
                <li>Phone: +91 9876543210</li>
              </ul>
            </Col>
          </Row>
        </Container>
    </footer>
  )
}

export default Footer

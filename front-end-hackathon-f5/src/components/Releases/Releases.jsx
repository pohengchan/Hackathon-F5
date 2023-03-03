import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import './releases.css'
import b1 from '../../assets/images/b1.jpg'
import b3 from '../../assets/images/b3.jpg'
import b5 from '../../assets/images/b5.jpg'
import b6 from '../../assets/images/b6.jpg'
import b7 from '../../assets/images/b7.jpg'
import b8 from '../../assets/images/b8.jpg'
import b11 from '../../assets/images/b11.jpg'
import b12 from '../../assets/images/b12.jpg'

const Releases = () => {
  return (
    
<Container>
<h1 className="text"> TOP BOOKS</h1>
      <Row className="justify-content-center" >
        <Col xs={12} md={6} lg={3} className="text-center">
          <Image src={b12} fluid className="mb-3" style={{ height: '400px' }}/>
        </Col>
        <Col xs={12} md={6} lg={3} className="text-center">
          <Image src={b5} fluid className="mb-3" style={{ height: '400px' }} />
        </Col>
        <Col xs={12} md={6} lg={3} className="text-center">
          <Image src={b6} fluid className="mb-3" style={{ height: '400px' }} />
        </Col>
        <Col xs={12} md={6} lg={3} className="text-center">
          <Image src={b1} fluid className="mb-3" style={{ height: '400px' }} />
        </Col>
      </Row>

      <Row className="justify-content-center" >
        <Col xs={12} md={6} lg={3} className="text-center">
          <Image src={b8} fluid className="mb-3" style={{ height: '400px' }}/>
        </Col>
        <Col xs={12} md={6} lg={3} className="text-center">
          <Image src={b7} fluid className="mb-3" style={{ height: '400px' }} />
        </Col>
        <Col xs={12} md={6} lg={3} className="text-center">
          <Image src={b11} fluid className="mb-3" style={{ height: '400px' }} />
        </Col>
        <Col xs={12} md={6} lg={3} className="text-center">
          <Image src={b3} fluid className="mb-3" style={{ height: '400px' }} />
        </Col>
      </Row>
    </Container>
   
  )
}

export default Releases
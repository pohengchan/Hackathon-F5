import React from 'react'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import b1 from '../../assets/images/b1.jpg'



const Releases = () => {
  return (
    
<Container>
<h2>Description</h2>
      <Row className="justify-content-center">
        <Col xs={12} md={6} lg={3} className="text-center">
          <Image src={b1} fluid className="mb-3" />
        </Col>
        <Col xs={12} md={6} lg={8} className="text-left">
          <h2>Los antiguos eslavos. Orígenes y migraciones.</h2>
          <h3>Michel Kazanski</h3>
          <h4>Description</h4><p>En sus variadas tesis sobre los orígenes de los eslavos, los godos en la Europa oriental en la época de la invasión de los hunos y las relaciones entre los eslavos y los godos en los siglos III-V, Michel Kazanski nos muestra las aportaciones de la arqueología al conocimiento del mundo eslavo y de sus orígenes.</p>
          <p><strong>Price: </strong>21€</p>
          <p><strong>Vendor: </strong>BornToRead</p>
          <p><strong>Location: </strong>Barcelona, Spain</p>
          <Button variant="primary">Contact</Button>
        </Col>
      </Row>
    </Container>
   
  )
}

export default Releases
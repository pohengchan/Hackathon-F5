import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: '#888DA7', position: 'fixed', bottom: 0, left: 0, right: 0 }}>
      <Container>
        <Row className="justify-content-center align-items-center">

          <Col xs={12} md={6} className="text-center text-md-right mt-3 mt-md-0">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <a href="#">
                  <FontAwesomeIcon icon={faFacebook} className="text-white" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter} className="text-white" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} className="text-white" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <FontAwesomeIcon icon={faLinkedin} className="text-white" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <FontAwesomeIcon icon={faYoutube} className="text-white" />
                </a>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={6} className="text-center text-md-left">
            <p className="text-black mb-0">&copy; 2023 All rights reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
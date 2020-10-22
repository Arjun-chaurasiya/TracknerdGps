import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import '../Home.css'
function Home(){
    return(
        
        <Row>
          <Col xs=''>
              <img className="Vehicleimage" src="tracknerd vehicle.jpg" alt="tracknerd vehicles"/>
          </Col>
          {/* <Col xs='2'>
          <h1 className="Protect">
           Protect Your Most Valuable Assets
          </h1>
          </Col> */}
        </Row>
    
    );
}
export default Home;
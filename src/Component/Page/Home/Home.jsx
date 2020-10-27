import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import Slider from '../../slider/slider';
import Footer from '../Footer';
import '../Home.css'
function Home(){
    return(
      <>
        <Slider/>
    <div className="">
      <h1>
        Welcome to Tracknerd Gps Private Limited 
      </h1>
    </div>
    <Footer/>
    </>
    );
}
export default Home;
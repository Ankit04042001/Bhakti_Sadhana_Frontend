import React from 'react'
import Calender from '../component/Calender'
import Header from '../component/Header';
import Footer from '../component/Footer';
import '../css/attendence.css';

const Attendence = () => {

 
  return (
    <div className='main-page'>
      <Header />
      <Calender />
      <Footer />
    </div>
  )
}

export default Attendence
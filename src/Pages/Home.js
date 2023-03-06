import React, {useState} from 'react';
import Header from '../component/Header';
import Carousel from 'react-bootstrap/Carousel';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Footer from '../component/Footer';
import '../css/home.css';
import '../css/menu-div.css';

const Home = () => {
    const [index, setIndex] = useState(0);   
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };


    return (
        <>
            <Header />
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require('../images/sadguru.png')}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <FormatQuoteIcon className='quote-icon'></FormatQuoteIcon>
                        <p>If you want joy, you have to turn inward because that is where it is generated.</p>
                        <div className='signature'>sadhguru</div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require('../images/sadguru2.png')}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <FormatQuoteIcon className='quote-icon'></FormatQuoteIcon>
                        <p>If you want joy, you have to turn inward because that is where it is generated.</p>
                        <div className='signature'>sadhguru</div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require('../images/sadguru.png')}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <FormatQuoteIcon className='quote-icon'></FormatQuoteIcon>
                        <p>If you want joy, you have to turn inward because that is where it is generated.</p>
                        <div className='signature'>sadhguru</div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Footer/>
        </>
    )
}

export default Home
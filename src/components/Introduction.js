import { Link } from 'react-router-dom';
import './Introduction.css'
import arrow from '../assets/images/arrow.svg';
import arrowHover from '../assets/images/arrowHover.svg';
// import '../App.css'

export default function Introduction() {
    return (
        <>
            <div className="intro">
                {/* <h1>intro</h1> */}
                <div className="text-container">
                    <div className="hello">
                        Hello! I am
                    </div>
                    <div className="name">
                        Rebecca Zhao
                    </div>
                    <div className="description">
                        I’m an undergraduate student at UCSC, majoring in Computer Science: 
                        Computer Game Design B.S. I’m interested in Software Development as well as Web Dev. 
                        Welcome to my personal website that I coded and designed by myself!&nbsp;&nbsp; 
                        <Link to='about' className='read-more'>
                            Read More&nbsp; 
                            <img className="arrow" src={arrow} alt="arrow" />
                            <img className="arrow-hover" src={arrowHover} alt="arrow" />
                        </Link>
                    </div>
                </div>
            </div>
        </>

    );
}
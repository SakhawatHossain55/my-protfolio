import React from 'react';
import { Container } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import image from '../../../images/my picture 1.png'
import './Hero.css'

const Hero = () => {
    const history = useHistory()
    const handleClick = () => {
        console.log('click');
        history.push('/about')
    }
    return (
        <div>
            <Container>
            <div className="row pb-5">
                <div className="col-md-6 d-flex align-items-center">
                    <div>
                        <p>Hello, I'm</p>
                        <h1>Sakhawat Hossain</h1>
                        <p>Full-stack Web Developer</p>
                        <p className="text-justify">A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.</p>
                        <button onClick={handleClick} as={Link} to="/about" className="btn-brand mr-3">About Me</button>
                        <button className="button-style btn-brand"><a href="https://drive.google.com/uc?export=download&id=16pfdkeTdG4VZh5VLwULO18M09kT35LBY">Download Resume</a></button>
                    </div>
                </div>
                <div className="col-md-6 p-5">
                    <img style={{width : '350px', float: 'right'}} src={image} alt=""/>
                </div>
            </div>
            </Container>
        </div>
    );
};

export default Hero;
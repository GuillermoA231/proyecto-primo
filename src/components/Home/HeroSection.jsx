import React from 'react';
import sandwichVideo from '../../resources/Home/sandwichVideo.mp4';
import './HeroSection.css'; // Assuming you have a CSS file named HeroSection.css in the same directory

function HeroSection() {
    return (
        <div className="jumbotron text-center hero-section">
            <video className="hero-video" autoPlay loop muted>
                <source src={sandwichVideo} type="video/mp4" />
            </video>
            <div className="hero-content">
                <h1 className="display-4">SANGUCHERIA TUCUNET!</h1>
                <p className="lead">Disfruta los mejores sanguches de Tucumán</p>
                <hr className="my-4"/>
                <p>Descubre nuestro menu y ordena AHORA!</p>
                <a className="btn btn-primary btn-lg" href="#menu" role="button">Ver Menu</a>
            </div>
        </div>
    );
}

export default HeroSection;

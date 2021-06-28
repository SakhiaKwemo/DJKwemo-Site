import React from 'react';
import './Footer.css';

function Footer() {
    return (
    <div className="FooterBox">
        <div className="FooterT">
            <a href ="https://www.instagram.com/djkelil.kwemo/" className="iconContainer2">
            <img src="/images/instagram.png" className="instagram"/>
            </a>
            <a href ="https://www.youtube.com/channel/UCUoVbf7HkLyBrEbNEoDmTEQ?view_as=subscriber" className="iconContainer2">
                <img src="/images/youtube1.png" className="youtube"/>
            </a>
            <a href ="https://www.tiktok.com/@djkelil.rockstar?lang=en" className="iconContainer2">
                <img src="/images/tiktok.png" className="tiktok"/>
            </a>
            <a href ="https://ca.linkedin.com/in/kelil-kwemo-57a3b8149" className="iconContainer">
                <img src="/images/linkedin.png" className="linkedin"/>
            </a>
            <a href ="https://www.facebook.com/kelilrockstar" className="iconContainer">
                <img src="/images/facebook.png" className="facebook"/>
            </a>
            <a href ="https://twitter.com/DJKelilRockstar" className="iconContainer">
                <img src="/images/twitter.png" className="twitter"/>
            </a>
        </div>
        <div className="FooterB">
            <div className="logoContainer">
                <img src="/images/djk logo.png" className="logo"/>
            </div>
            <text className = "FooterText">I WILL BECOME THE BIGGEST DJ/PRODUCER/ARTIST IN THE WORLD, JUST WATCH!!</text>
            <div className="logoContainer2">
                <img src="/images/djk logo.png" className="logo"/>
            </div>
        </div>
    </div>
    );
  }

export default Footer;

/*
import React from 'react';
import './Footer.css';

function Footer() {
    return (
      <div className="Footer">
        <div className="logoContainer">
            <img src="/images/logo.png" className="logo"/>
        </div>
        <text className = "FooterText">I WILL BECOME THE BIGGEST DJ IN THE WORLD, JUST WATCH!! -> </text>
        <a href ="https://www.instagram.com/djkelil.kwemo/" className="iconContainer2">
            <img src="/images/instagram.png" className="instagram"/>
        </a>
        <a href ="https://www.youtube.com/channel/UCUoVbf7HkLyBrEbNEoDmTEQ?view_as=subscriber" className="iconContainer2">
            <img src="/images/youtube1.png" className="youtube"/>
        </a>
        <a href ="https://www.tiktok.com/@djkelil.rockstar?lang=en" className="iconContainer2">
            <img src="/images/tiktok.png" className="tiktok"/>
        </a>
        <a href ="https://ca.linkedin.com/in/kelil-kwemo-57a3b8149" className="iconContainer">
            <img src="/images/linkedin.png" className="linkedin"/>
        </a>
        <a href ="https://www.facebook.com/kelilrockstar" className="iconContainer">
            <img src="/images/facebook.png" className="facebook"/>
        </a>
        <a href ="https://twitter.com/DJKelilRockstar" className="iconContainer">
            <img src="/images/twitter.png" className="twitter"/>
        </a>
        <div className="logoContainer2">
            <img src="/images/logo.png" className="logo"/>
        </div>
      </div>
    );
  }

export default Footer;
*/

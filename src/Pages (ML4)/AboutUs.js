import React, {Component} from 'react';
import './AboutUs.css';

import Footer2 from '../../src/Pages (ML4)/Footer2';
import NavBar2 from '../../src/Pages (ML4)/Navbar2';

class AboutMe extends Component {
  render(){
    return (
      <div className="AboutMeBox2">
        <NavBar2 
            setHome = {this.props.setHome} 
            setAboutUs = {this.props.setAboutUs} 
            setArcade = {this.props.setArcade}
        />
        <div className="paddingBox">
          <div className="earlyLife3">
            <div className = "LifeBox">
              <text className="LifeText3">Timeless Muzik</text>
              <img className= "LifeImageA1" src ="images/AboutUs/1.png"/>
            </div>
            <div className = "pBox1">
              <p className="LifeP2">Originally I wanted to create a music label. Where I was going to sign artists.</p>
            </div>
          </div> 
          <div className="earlyLife3">
            <div className = "pBox1">
              <p className="LifeP1">My artist name was going to be KelilGotSauce, by label name Timeless Muzic, and Lyrixx would be my company where I would launch cool apps related to music.</p>
            </div>
            <div className = "LifeBox">
              <text className="LifeText3">Lyrixx, MZK, KGS</text>
              <img className= "LifeImageA1" src ="images/AboutUs/2.png"/>
            </div>
          </div> 
          <div className="earlyLife2">
            <div className = "LifeBox">
              <text className="LifeText3">Forever Timeless Muzik</text>
              <img className= "LifeImageA1" src ="images/AboutUs/3.png"/>
            </div>
            <div className = "pBox1">
              <p className="LifeP2">I started “literally” having dreams where the word forever kept on popping up. I felt like god was trying to send me a message. So I switched the name and logo of my label into “Forever Timeless Muzik”. </p>
            </div>
          </div> 
          <div className="earlyLife2">
            <div className = "pBox1">
              <p className="LifeP1">The logo that I initially drew was driving me insane. I did not like how it looked, I felt it was too weird. I was losing sleep over it. But than, one day while walking to school, the perfect logo just hit me.</p>
            </div>
            <div className = "LifeBox">
              <text className="LifeText3">New Logo</text>
              <img className= "LifeImageA1" src ="images/AboutUs/4.png"/>
            </div>
          </div> 
          <div className="earlyLife2">
            <div className = "LifeBox">
              <text className="LifeText3">Music Lives Forever </text>
              <img className= "LifeImageA1" src ="images/AboutUs/5.png"/>
            </div>
            <div className = "pBox1">
              <p className="LifeP2">Although I loved the name and the logo, it was still missing something. I needed something that I could stand for, I needed something that would become bigger than me, I needed a powerful statement, something that represented everything that I stood by. Something quick, something short, something captivating. And once again, on my way to school. The perfect name hit me “Music Lives Forever”, and as soon as I said it out loud, I knew I had finally found it.</p>
            </div>
          </div> 
          <div className="earlyLife2">
            <div className = "pBox1">
              <p className="LifeP1">So I knew that I wanted the logo to be in the shape of a heart. So I sent my graphic designer (Shotout to my friend Zoey from @zozidesigns) a picture I found on google, and asked her to make a vector drawing of it.</p>
            </div>
            <div className = "LifeBox">
              <text className="LifeText3">Logo Idea</text>
              <img className= "LifeImageA1" src ="images/AboutUs/6.png"/>
            </div>
          </div> 
          <div className="earlyLife2">
            <div className = "LifeBox">
              <text className="LifeText3">Logo Rough Draft</text>
              <img className= "LifeImageA1" src ="images/AboutUs/7.png"/>
            </div>
            <div className = "pBox1">
              <p className="LifeP2">She sent me back the drawing within days, and it was exactly what I had envisioned it to be in my head, it was perfect.</p>
            </div>
          </div> 
          <div className="earlyLife2">
            <div className = "pBox1">
              <p className="LifeP1">Now the only problem was that, I felt like something was missing in the middle of the logo. I asked her to send me the gimp file, to see if I could edit it some more myself. I spent days thinking about what to add in the middle, but nothing seemed to work.</p>
            </div>
            <div className = "LifeBox">
              <text className="LifeText3">Problem??</text>
              <img className= "LifeImageA1" src ="images/AboutUs/8.png"/>
            </div>
          </div> 
          <div className="earlyLife2">
            <div className = "LifeBox">
              <text className="LifeText3">ML4 Logo</text>
              <img className= "LifeImageA1" src ="images/AboutUs/9.png"/>
            </div>
            <div className = "pBox1">
              <p className="LifeP2">I gave up, I thought maybe, I should just leave it empty inside, who cares. I had told Zoey that I was changing my name from “Music Lives Forever” to “Muzic Livez 4Ever” I just thought it looked cooler. So what she decided to do was to take the initials from my brand name, and make a small logo with those letters, and put it inside the heart. What a genius idea that was, and that’s how the logo was built.</p>
            </div>
          </div> 
          <div className="earlyLife2">
            <div className = "pBox1">
              <p className="LifeP1">Music is the closest thing to a time machine that we possess as humans. It has the ability to transpose our souls anywhere in space, and anywhere in time. I came to the conclusion not too long ago, that my music would be the thing that will allow me to truly live forever, it will allow for people to listen to my music in 500 years, and make them feel like they know me, even though they have never met me. I created this company with the goal of revolutionizing the way people consume and create music. We believe that the power of music is not being used to its full potential, and there are so many more unexploited gifts that this sacred art has to offer.</p>
            </div>
            <div className = "LifeBox">
              <text className="LifeText3">Significance: </text>
              <img className= "LifeImageA2" src ="images/ml4.png"/>
            </div>
          </div> 
          <div className="earlyLife2">
            <div className = "LifeBox">
              <text className="LifeText3">Heart Symbol: </text>
              <img className= "LifeImageA2" src ="images/ml4.png"/>
            </div>
            <div className = "pBox1">
              <p className="LifeP2">The heart shape mainly represents two things. For one, it represents the first actual rhythm ever created. Before 808s, before drums, we always had rhythm within us, its always been there, right in the middle of our chest. The rhythm of our heartbeat, for an average human, is about 120 BPM, which is also coincidently the BPM used to make music that people love to dance to. Lastly, the heart shape also represents life, health, and longevity, which ties into the purpose of our brand, which is to experience music in ways that live forever.</p>
            </div>
          </div> 
        </div>
        <Footer2/>
      </div>
    );
  }
}

export default AboutMe;


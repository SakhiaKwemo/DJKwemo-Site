import React, {Component} from 'react';
import './AboutMe.css';

import Footer from '../../Footer/Footer';
import NavBar from '../../NavBar/NavBar';

class AboutMe extends Component {
  render(){
    return (
      <div className="AboutMeBox">
        <NavBar
          setHome = {this.props.setHome} 
          setMusic = {this.props.setMusic} 
          setBooks = {this.props.setBooks} 
          setContent = {this.props.setContent} 
          setContactMe = {this.props.setContactMe} 
          setAboutMe = {this.props.setAboutMe}
        />
        <div className="paddingBox">
          <div className="earlyLife">
            <div className = "LifeBox">
              <text className="LifeText2">4 Years Old</text>
              <img className= "LifeImage4" src ="images/4 years old.jpg"/>
            </div>
            <div className ="lifeLine"></div>
            <div className = "pBox1">
              <p className="LifeP">I Started playing soccer as soon as I could walk. I quickly became addicted to sports, I loved the competition and the ability to get better. However, I was so competitive that I would cry and throw tantrums if I didn't win.</p>
            </div>
          </div> 
          <div className="earlyLife">
            <div className = "pBox1">
              <p className="LifeP">I was a strange kid, I remember spending my time alone in my room thinking about the meaning of life and where do humans come from, which is weird at that age.</p>
            </div>
            <div className ="lifeLine"></div>
            <div className = "LifeBox">
              <text className="LifeText2">5 Years Old</text>
              <img className= "LifeImage" src ="images/5 years old.jpg"/>
            </div>
          </div> 
          <div className="earlyLife">
            <div className = "LifeBox">
              <text className="LifeText2">6 Years Old</text>
              <img className= "LifeImage6" src ="images/6 years old.jpg"/>
            </div>
            <div className ="lifeLine"></div>
            <div className = "pBox1">
              <p className="LifeP">My grandparents came to Canada to visit, and bought me and my brother a radio. This was my first real introduction to music. We somehow got our hands on CDs and I remember hearing on that radio artists such as: Black Eyed Peas, Usher, 50 Cent, Eminem, Outkast, and Corneille. The song "Hey Mama" by the Black Eyed Peas, was my personal favourite</p>
            </div>
          </div> 
          <div className="earlyLife">
            <div className = "pBox1">
              <p className="LifeP">I Wrote My first song for my brother on his birthday (I could barely write at that time). It was a remix of the theme song for the show called 6teen. And it was my brother's 10th birthday so I replaced the 16 with 10 and figured out rhymes to go with it</p>
            </div>
            <div className ="lifeLine"></div>
            <div className = "LifeBox">
              <text className="LifeText2">7 Years Old</text>
              <img className= "LifeImage7" src ="images/7 years old.jpg"/>
            </div>
          </div> 
          <div className="earlyLife">
            <div className = "LifeBox">
              <text className="LifeText2">8 Years Old</text>
              <video autoPlay loop muted className="lifeVideo" controls width="500"> 
                  <source src="/images/8 year old poem.mp4"/>
              </video>
            </div>
            <div className ="lifeLine"></div>
            <div className = "pBox1">
              <p className="LifeP">I wrote a poem for my Aunt at her wedding. I was super nervous at first, but I was so glad that I did it. While writing the poem, I remember thinking to myself: "this is so easy", rhymes just seemed to come to my head so effortlessly</p>
            </div>
          </div> 
          <div className="earlyLife">
            <div className = "pBox1">
              <p className="LifeP">Fell in Love with dancing (copying my brother's and cousin's moves), especially breakdancing. I would dance for hours at a time and watch youtube videos to get better.</p>
            </div>
            <div className ="lifeLine"></div>
            <div className = "LifeBox">
              <text className="LifeText2">9-12 Years Old</text>
              <video autoPlay loop muted className="lifeVideo" controls width="500"> 
                  <source src="/images/9-12 years old.mp4"/>
              </video>
            </div>
          </div> 
          <div className="earlyLife">
            <div className = "LifeBox">
              <text className="LifeText2">13 Years Old</text>
              <video autoPlay loop muted className="lifeVideo" controls width="500"> 
                  <source src="/images/13 years.mp4"/>
              </video>
            </div>
            <div className ="lifeLine"></div>
            <div className = "pBox1">
              <p className="LifeP">Dabbled around with playing piano, drums, and saxophone at school. But I stopped dancing, because although I loved it, I was scared people were ganna say it was lame.</p>
            </div>
          </div> 
          <div className="earlyLife">
            <div className = "pBox1">
              <p className="LifeP">Started Freestyling and writing rhymes on my phone. Me and my friends would sometimes have rap battles at lunch time. My highschool went on a camping trip, where a talent show took place. I wrote a rap song for my class it was something like: "Im Sakhia, Im from the gettho, I like fried chicken thats the motto". It was cringy as fuck, but people went crazy!!</p>
            </div>
            <div className ="lifeLine"></div>
            <div className = "LifeBox">
              <text className="LifeText2">14-15 Years Old</text>
              <img className= "LifeImage15" src ="images/15 years old.jpg"/>
            </div>
          </div> 
          <div className="earlyLife">
            <div className = "LifeBox">
              <text className="LifeText2">16 Years Old</text>
              <img className= "LifeImage16" src ="images/16 years old.jpg"/>
            </div>
            <div className ="lifeLine"></div>
            <div className = "pBox1">
              <p className="LifeP">Discovered Hot New Hip Hop through my brother and I was exposed to an unlimited amount of new music.</p>
            </div>
          </div> 
          <div className="earlyLife">
            <div className = "pBox1">
              <p className="LifeP">This is where I started becoming OBSESSED with music. Spending all my time consuming and scavenging the internet for new music to feast on. I used it as fuel to pursue my aspirations of playing in the NFL. I listened to so much music that I became  really good at predicting which artists were going to blow up. (aka Logic, Tory Lanez, Meek Mill, Migos, Young Thug, and of course Russ).</p>
            </div>
            <div className ="lifeLine"></div>
            <div className = "LifeBox">
              <text className="LifeText2">17 Years Old</text>
              <img className= "LifeImage17" src ="images/17 years old.jpg"/>
            </div>
          </div> 
          <div className="earlyLife">
            <div className = "LifeBox">
              <text className="LifeText2">18 Years Old</text>
              <video autoPlay loop muted className="lifeVideo" controls width="500"> 
                  <source src="/images/18 years old.mp4"/>
              </video>
            </div>
            <div className ="lifeLine"></div>
            <div className = "pBox1">
              <p className="LifeP">"Learned how to produce music (make beats). In my last year of High School. I ran into this kid name Henry Anzola, he was a rapper and he linked me up with one of his producers named Matt Beta. He taught me how to make beats and sell them online."</p>
            </div>
          </div> 
          <div className="earlyLife">
            <div className = "pBox1">
              <p className="LifeP">"I arrived at Queens and I Learned How to DJ. I realized that DJing was a great way to make money and to get my name out there. I picked up the skill in a matter of days. This made me fall even deeper in love with music, so much that I didn't even care about football and school that much anymore."</p>
            </div>
            <div className ="lifeLine"></div>
            <div className = "LifeBox">
              <text className="LifeText2">19 Years Old</text>
              <video autoPlay loop muted className="lifeVideo" controls width="500"> 
                  <source src="/images/19 years old.mp4"/>
              </video>
            </div>
          </div> 
          <div className="earlyLife">
            <div className = "LifeBox">
              <text className="LifeText2">20 Years Old</text>
              <video autoPlay loop muted className="lifeVideo" controls width="500"> 
                  <source src="/images/20 years old.mp4"/>
              </video>
            </div>
            <div className ="lifeLine"></div>
            <div className = "pBox1">
              <p className="LifeP">Just when things were starting to take off for me and my music I got put on probation for failing 2 classes. In order to stay in school I would have to put a pause on music. This decision was very hard for me to make, but it didn't matter. I had finally found my purpose, I knew what I wanted to do with my life and that was to focus on music. This sparked me to write my first book entitled "I Will Become".</p>
            </div>
          </div> 
          <div className="earlyLife">
            <div className = "pBox1">
              <p className="LifeP">I taught myself how to build apps & websites and created my own Company called "Muzic Livez 4Ever". </p>
            </div>
            <div className ="lifeLine"></div>
            <div className = "LifeBox">
              <text className="LifeText2">21-22 Years Old</text>
              <video autoPlay loop muted className="lifeVideo" controls width="500"> 
                  <source src="/images/21 years old.mp4"/>
              </video>
            </div>
          </div> 
          <div className="earlyLife">
            <div className = "LifeBox">
              <text className="LifeText2">23 Years Old</text>
              <img className= "LifeImage21" src ="images/Think Twice (1).png"/>
            </div>
            <div className ="lifeLine"></div>
            <div className = "pBox1">
              <p className="LifeP">Publicly Released my book "I Will Become". Made a vow in front of the whole world to wear the same shirt everyday, and drop a song every single day for the rest of my life until I become the biggest DJ/Artist/Producer in the world.</p>
            </div>
          </div> 
        </div>
        <Footer/>
      </div>
    );
  }
}

export default AboutMe;


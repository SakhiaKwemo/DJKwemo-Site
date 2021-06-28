import React, {Component} from 'react';
import './Home.css';
import Clock from 'react-live-clock'; 

import Footer from '../../Footer/Footer';
import NavBar from '../../NavBar/NavBar';

const julyDay = 197;
const janDay = 170; 

const julyYear = 2018; 
const janYear = 2019; 

//On Jan 1st: 
// YYYY-janYear  &&  DDD - (-janDay)
//On July 15th: 
// YYYY-julyYear && DDD-julyDay

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        
    return (
        <div className="wtBlock">
            <NavBar
                setHome = {this.props.setHome} 
                setMusic = {this.props.setMusic} 
                setBooks = {this.props.setBooks} 
                setContent = {this.props.setContent} 
                setContactMe = {this.props.setContactMe} 
                setAboutMe = {this.props.setAboutMe}
            />
            <div className="wtBox"> 
                    I WILL BECOME.
            </div>
            <div className="dateBox">
                    <div className="yearBox">
                        <text className="wtText"> Year:</text>
                        <Clock format={'YYYY'} filter={(YYYY) => {return YYYY-janYear}}/> 
                    </div>
                    <div className="yearBox">
                        <text className="wtText"> Day:</text>
                        <Clock format={'DDD'} filter={(DDD) => {return DDD - (-janDay)}}/>
                    </div>
                    <div className="yearBox">
                        <text className="wtText"> Hour:</text>
                        <Clock format={'HH'}/>
                    </div>
                    <div className="yearBox">
                        <text className="wtText"> Minute:</text>
                        <Clock format={'mm'}/>
                    </div>
                    <div className="lastBox">
                        <text className="wtText"> Second:</text>
                        <Clock format={'ss'}/>
                    </div>
            </div>
            <video autoPlay loop muted > 
                <source src="/images/kwemo part2.MOV"/>
            </video>
            <Footer/>
        </div>
    );
  }

}

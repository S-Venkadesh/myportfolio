import React from "react";
import {Card} from "../../components/card/index"

import ProfilePic from "../../images/profilepic.jpg"

import "./styles.css";
import "../../commonstyle.css"

export function HomeScreen(){
    return(
        <div className="homeScrean">
            {/* <div className="cardPart"> */}
            <Card className="homeScreenCard">
                <div className="profileInfo">
                <p className="fontStyle homeScreenfonts about"> Haii There 👋, I'm</p>
                <p className="fontStyle homeScreenfonts name"> Venkadesh S</p>
                <p className="fontStyle homeScreenfonts"> Web Developer</p>
                <button className="fontStyle button">Resume</button>
                </div>
                <img className="image" src={ProfilePic} alt=""/>
            </Card>
            {/* </div> */}
{/* 
            <div className="profileArea">
                <img className="image" src={ProfilePic} alt=""/>
            </div> */}
        </div>
    )
}
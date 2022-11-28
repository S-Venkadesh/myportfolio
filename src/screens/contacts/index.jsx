import React, {useState} from "react";
import Shape from 'react-clip-path';

import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";

import "./contact.styles.css"

const CONTACT_MEDIAS = [
    {
        name: "Twitter",
        icon: "AiOutlineTwitter"
    },
    {
        name: "LinkedIn",
        icon: "AiOutlineLinkedin"
    },
    {
        name: "Mail",
        icon: "AiOutlineMail"
    },
    {
        name: "Github",
        icon: "AiOutlineGithub"
    }
]

function IconEvent(icon){
    debugger;
    switch (icon) {
        case "AiOutlineTwitter":
            return <AiOutlineTwitter className="mediaIcon" />
        case "AiOutlineLinkedin": 
            return <AiOutlineLinkedin className="mediaIcon"/>
        case "AiOutlineMail": 
            return <AiOutlineMail className="mediaIcon"/>
        case "AiOutlineGithub": 
            return <AiOutlineGithub className="mediaIcon"/>
        default: 
        return "haii";
    }
}

export function ContactScreen(){

    const [hoverStategithub, setHoverStategithub] = useState({state: false, color: "white"});
    const [hoverStatelinkedin, setHoverStatelinkedin] = useState({state: false, color: "white"});
    const [hoverStatemail, setHoverStatemail] = useState({state: false, color: "white"});
    const [hoverStatetwitter, setHoverStatetwitter] = useState({state: false, color: "white"});

    return (
        <div className="contactBoard">
            <div className="board">
                            {/* one */}
                            <div className="bulbBox">
                            <div className="wire"/>
                            <div className="bulbHandler"/>
                            <div style={{backgroundColor: `${hoverStatetwitter.color}`, zIndex: 1}} className="bulb"/>
                            {/* <div className="lightShade"/> */}
                            {hoverStatetwitter.state && (
                                <div className="trapezoid">
                                    <Shape
                                        // name="Trapezoid"
                                        id="trapezoid"
                                        backgroundColor="#bd34f14d"
                                        width="150px"
                                        height="200px"
                                        formula="polygon(44% 0%,55% 0%,100% 100%,0% 100%)"
                                    />
                                </div>
                            )
                            }
                            <div 
                            className="mediaBox" 
                            onMouseEnter={()=>setHoverStatetwitter({state: true, color: "#bd34f1"})} 
                            onMouseLeave={()=>setHoverStatetwitter({state: false, color: "white"})}>
                                <AiOutlineTwitter style={{color:`${hoverStatetwitter.color}`}} className="mediaIcon" />
                            </div>
                            </div>

                            {/* two */}

                            <div className="bulbBox">
                            <div className="wire"/>
                            <div className="bulbHandler"/>
                            <div style={{backgroundColor: `${hoverStatelinkedin.color}`, zIndex: 1}} className="bulb"/>
                            {/* <div className="lightShade"/> */}
                            {hoverStatelinkedin.state && (
                                <div className="trapezoid">
                                    <Shape
                                        // name="Trapezoid"
                                        id="trapezoid"
                                        backgroundColor="#007fa27d"
                                        width="150px"
                                        height="200px"
                                        formula="polygon(44% 0%,55% 0%,100% 100%,0% 100%)"
                                    />
                                </div>
                            )
                            }
                            <div 
                            className="mediaBox" 
                            onMouseEnter={()=>setHoverStatelinkedin({state: true, color: "#0477b5"})} 
                            onMouseLeave={()=>setHoverStatelinkedin({state: false, color: "white"})}>
                                <AiOutlineLinkedin style={{color:`${hoverStatelinkedin.color}`}} className="mediaIcon"/>
                            </div>
                            </div>

                            {/* three */}

                            <div className="bulbBox">
                            <div className="wire"/>
                            <div className="bulbHandler"/>
                            <div style={{backgroundColor: `${hoverStatemail.color}`, zIndex: 1}} className="bulb"/>
                            {/* <div className="lightShade"/> */}
                            {hoverStatemail.state && (
                                <div className="trapezoid">
                                    <Shape
                                        // name="Trapezoid"
                                        id="trapezoid"
                                        backgroundColor="#f1a63852"
                                        width="150px"
                                        height="200px"
                                        formula="polygon(44% 0%,55% 0%,100% 100%,0% 100%)"
                                    />
                                </div>
                            )
                            }
                            <div 
                            className="mediaBox" 
                            onMouseEnter={()=>setHoverStatemail({state: true, color: "#f1a638"})} 
                            onMouseLeave={()=>setHoverStatemail({state: false, color: "white"})}>
                                <AiOutlineMail style={{color:`${hoverStatemail.color}`}} className="mediaIcon"/>
                            </div>
                            </div>

                            {/* four */}

                            <div className="bulbBox">
                            <div className="wire"/>
                            <div className="bulbHandler"/>
                            <div style={{backgroundColor: `${hoverStategithub.color}`, zIndex: 1}} className="bulb"/>
                            {/* <div className="lightShade"/> */}
                            {hoverStategithub.state && (
                                <div className="trapezoid">
                                    <Shape
                                        // name="Trapezoid"
                                        id="trapezoid"
                                        backgroundColor="#f206d745"
                                        width="150px"
                                        height="200px"
                                        formula="polygon(44% 0%,55% 0%,100% 100%,0% 100%)"
                                    />
                                </div>
                            )
                            }
                            <div 
                            className="mediaBox" 
                            onMouseEnter={()=>setHoverStategithub({state: true, color: "#f206d7"})} 
                            onMouseLeave={()=>setHoverStategithub({state: false, color: "white"})}>
                                <AiOutlineGithub style={{color:`${hoverStategithub.color}`}} className="mediaIcon"/>
                            </div>
                            </div>
            </div>
        </div>
    )
}
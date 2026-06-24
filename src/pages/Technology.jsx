import { lazy, useState } from "react";
import Navbar from "../components/Navbar";
import launch from '../assets/technology/image-launch-vehicle-portrait.jpg'
import capsule from '../assets/technology/image-space-capsule-portrait.jpg'
import port from '../assets/technology/image-spaceport-portrait.jpg'
const techs = {
    Launch : {
        name : 'LAUNCH VEHICLE',
        image : launch,
        detail : "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    },
     Port: {
        name : 'SPACEPORT',
        image : port,
        detail : "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    },
    Capsule : {
        name : 'SPACE CAPSULE',
        image : capsule,
        detail : "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    }
}
export default function Technology(){
    const [tech, settech] = useState("Launch")

    const activeStyle = {
        backgroundColor: "white",
        color: "black"
    }


    return(
        <div className="technology">
            <Navbar />
            <h3 className="pickdestination">SPACE LAUNCH 101</h3>
            <div className="techbody">
                <div className="techinfo">
                    <div className="option">
                        <button className="OpButton" style={tech === "Launch" ? activeStyle : {}} onClick={() => settech("Launch")}>1</button>
                        <button className="OpButton" style={tech === "Port" ? activeStyle : {}} onClick={() => settech("Port")}>2</button>
                        <button className="OpButton" style={tech === "Capsule" ? activeStyle : {}} onClick={() => settech("Capsule")}>3</button>
                    </div>
                    <div className="techtext">
                        <h3 style={{color : 'grey'}}>THE TERMINOLOGY...</h3>
                        <h1 style={{fontSize: 60 , color: 'white'}}>{techs[tech].name}</h1>
                        <p style={{color: ' white', maxWidth : 500}}>{techs[tech].detail}</p>
                    </div>
                </div>
                <img src={techs[tech].image} alt={techs[tech].name} />
            </div>
        </div>
    )
}
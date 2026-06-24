import { useState } from "react";
import commander from '../assets/crew/image-douglas-hurley.png'
import missionspecialist from '../assets/crew/image-mark-shuttleworth.png'
import pilot from '../assets/crew/image-victor-glover.png'
import flightengineer from '../assets/crew/image-anousheh-ansari.png'
import Navbar from "../components/Navbar";
const crews = {
    Commander : {
        post : 'COMMANDER',
        name : 'DOUGLAS HURLEY',
        image : commander,
        detail: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    },
    MissionSpecialist : {
        post : 'MISSION SPECIALIST',
        image : missionspecialist,
        name : 'MARK SHUTTLEWORTH',
        detail: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    },
    Pilot : {
        post : 'PILOT',
        image : pilot,
        name : 'VICTOR GLOVER',
        detail: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. "
    },
    FlightEngineer : {
        post : 'FLIGHT ENGINEER',
        image: flightengineer,
        name : 'ANOUSHEH ANSARI',
        detail: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. "
    },
}
export default function Crew(){
    const [crew, setcrew] = useState("Commander")
    return(
        <div className="Crew">
            <Navbar />
            <p className="pickdestination">MEET YOUR CREW</p>
            <div className="crewbody">
                <div className="crewinfo">
                    <h3 style={{color: 'grey'}}>{crews[crew].post}</h3>
                    <h1>{crews[crew].name}</h1>
                    <p style={{maxWidth: 500}}>{crews[crew].detail}</p>
                    <div className="bullets">
                        <input
                        id="crew"
                        type="radio"
                        name = "crew"
                        value= "Commander"
                        checked = {crew === "Commander"}
                        onChange={(e) => setcrew(e.target.value)}
                        />
                        <input
                        id="crew"
                        type="radio"
                        name = "crew"
                        value= "MissionSpecialist"
                        checked = {crew === "MissionSpecialist"}
                        onChange={(e) => setcrew(e.target.value)}
                        />
                        <input
                        id="crew"
                        type="radio"
                        name = "crew"
                        value= "Pilot"
                        checked = {crew === "Pilot"}
                        onChange={(e) => setcrew(e.target.value)}
                        />
                        <input
                        id="crew"
                        type="radio"
                        name = "crew"
                        value= "FlightEngineer"
                        checked = {crew === "FlightEngineer"}
                        onChange={(e) => setcrew(e.target.value)}
                        />
                    </div>
                    
                </div>

                <div>
                    <img src={crews[crew].image} alt={crews[crew].name} width="300" />
                </div>
            </div>
        </div>
    )
}
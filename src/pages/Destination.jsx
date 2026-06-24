import Navbar from '../components/Navbar'
import { useState } from "react";
import moon from '../assets/destination/image-moon.png'
import mars from '../assets/destination/image-mars.png'
import europa from '../assets/destination/image-europa.png'
import titan from '../assets/destination/image-titan.png'

const planets = {
  Moon: {
    name : 'MOON',
    image: moon,
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: '384,400 KM',
      time: '3 DAYS'
  },
  Mars: {
    name: 'MARS',
    image: mars,
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: '225 MIL. KM',
      time: '9 MONTHS'
  },
  Europa: {
    name: 'EUROPA',
    image: europa,
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: '628 MIL. KM',
      time: '3 YEARS'
  },
  Titan: {
    name: 'TITAN',
    image: titan,
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: '1.6 BIL. KM',
      time: '7 YEARS'
  },
};


export default function Destination() {
    const [planet, setPlanet] = useState("Moon");

    const activeStyle = {
        borderBottom: "3px solid white",
        paddingBottom: "8px" 
    };

    return (
        <div className='Destination-body'>
            <Navbar />
            <p className='pickdestination'> PICK YOUR DESTINATION</p>
            <div className="planetbody">
                <div className="planetimg">
                    <img src={planets[planet].image} alt="Planet" width="300" />
                </div>
                <div className="planetinfo">
                    <div className="planetbuttons">
                        <button className='planetbutton ' style={planet === "Moon" ? activeStyle : {}} onClick={() => setPlanet("Moon")}>MOON</button>
                        <button className='planetbutton' style={planet === "Mars" ? activeStyle : {}} onClick={() => setPlanet("Mars")}>MARS</button>
                        <button className='planetbutton' style={planet === "Europa" ? activeStyle : {}} onClick={() => setPlanet("Europa")}>EUROPA</button>
                        <button className='planetbutton' style={planet === "Titan" ? activeStyle : {}} onClick={() => setPlanet("Titan")}>TITAN</button>

                    </div>
                    <div className="planettext">
                        <h1 style={{fontSize: 150 , color: 'white'}}>{planets[planet].name}</h1>
                        <p style={{maxWidth: 500 , color: 'white'}}>{planets[planet].description}</p>
                        <div className="planetdet">
                            <div className="distance ">
                                <h6>AVG. DISTANCE</h6>
                                <h2>{planets[planet].distance}</h2>

                            </div>
                            <div className="distance ">
                                <h6>EST. TRAVEL TIME</h6>
                                <h2>{planets[planet].time}</h2>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
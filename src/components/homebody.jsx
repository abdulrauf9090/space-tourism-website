import { Link } from "react-router-dom"
export default function Homebody(){
    return(
        <div className="Homebody">
            
            <div className="Homebody-text">
                <h3>SO, YOU WANT TO TRAVEL TO</h3>
                <h1 className="Space">Space</h1>
                <p>Let's face it; if you want to go to space, you might as well genuinely go < br/>to outer space and not hover kind of on the egde of it. Well sit back,<br /> and relax because we'll give you a truly out of this world experience!</p>
            </div>
            <Link to="/destination" className="circle" style={{ textDecoration: 'none' }}>
                <h1>Explore</h1>
            </Link>
        </div>
    )
}
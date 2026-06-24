import { Link } from 'react-router-dom'
import logo from '../assets/shared/logo.svg'
export default function Navbar() {
    return (
        <div className='d-flex align-items-center justify-content-between pt-4 ps-4 navbody'>
            <img src={logo} alt="logo" />
            <div className='navbar-links d-flex gap-3 align-items-center justify-content-between px-3 py-2 ps-5 bg-secondary bg-opacity-25 shadow-sm w-50'>
                <Link to="/" className='text-white text-decoration-none fs-5 fw-bold link-underline'>HOME</Link>
                <Link to="/Destination" className='text-white text-decoration-none fs-5 fw-bold link-underline'>DESTINATION</Link>
                <Link to="/Crew" className='text-white text-decoration-none fs-5 fw-bold link-underline'>CREW</Link>
                <Link to="/Technology" className='text-white text-decoration-none fs-5 fw-bold link-underline'>TECHNOLOGY</Link>
            </div>
        </div>
    )
}
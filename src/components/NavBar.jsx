import {Link} from "react-router-dom"


const Navbar = () => {
return(

 
<div className="container-fluid bg-img gistration-area">
      <div className="row pt-5 text-dark">
        <div className="navbar navbar-expand-lg fixed-top Registration-area">
          <a href="#" className="navbar-brand fw-bold ps-5 fs-3 text-white"> INNOVA</a>
          <button
            type="button"
            class="navbar-toggler text-dark"
            data-bs-toggle="offcanvas"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end bg-dark pt-3 ps-5 w-50" id="navbarNav" >
            <ul className="navbar-nav justify-content-end pe-5">
              <li className="navbar-item px-3">
              <Link to="/">Home</Link>
              </li>
              <li className="navbar-item px-3">
              <Link to="/About">About</Link>
              </li>
              <li className="navbar-item px-3">
              <Link to="/Service">Service</Link>
              </li>
              <li className="navbar-item px-3">
              <Link to="/Project">Project</Link>
              </li>
              <li className="navbar-item px-3">
              <Link to="/Contact">Contact us</Link>
              </li>


         
            </ul>
          </div>
        </div>
      </div>
    </div>
    
   
















);


};
export default  Navbar;
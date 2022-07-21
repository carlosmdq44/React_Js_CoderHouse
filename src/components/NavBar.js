import CarWidget  from "./CarWidget";
import { NavLink } from 'react-router-dom';

const NavBar = () =>{
    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">World Market</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse position-absolute top-25 end-0 px-3" id="navbarNav">
        <ul className="navbar-nav">
                  <NavLink className="NavLink" to="/Home">
                                     Home                                      
                  </NavLink>
                  <NavLink className="NavLink" to="/Category">
                                     Category                                      
                  </NavLink>
                  <NavLink className="NavLink" to="/About">
                                     About                                      
                  </NavLink>
                  <NavLink className="NavLink" to="/Contact">
                                     Contact                                      
                  </NavLink>  
        </ul>
        <CarWidget/>
      </div>
    </div>
  </nav>
}

export default NavBar;
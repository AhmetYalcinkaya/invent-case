import { Link } from "react-router-dom";


function Navbar() {


  return (
    <div className=" bg-light">
      <nav className="navbar navbar-expand-lg navbar-light shadow">
        <div className="container">
          <ul className="navbar-nav me-auto  mb-lg-0">
            <Link
              className="btn btn-outline-primary ms-auto px-4 rounded-pill"
              to="/"
            >
              Homepage
            </Link>
          </ul>

        
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

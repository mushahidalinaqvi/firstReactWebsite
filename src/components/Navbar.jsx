import { Link } from "react-router-dom";
import logo from "../assets/react.svg"; // Path to your logo

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark  p-3  shadow-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" width="30" height="30" className="d-inline-block align-text-top me-1" />
          Assignment
        </Link>
        <button className="navbar-toggler me-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center font-weight-bold" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link  active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/addData">Form</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/service">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
        </div>
        <div className="d-flex">
          <button className="btn btn-outline-warning me-2" type="button"><Link className="nav-link" to='/login'>Login</Link></button>
          <button className="btn btn-warning" type="button">Sign Up</button>
        </div>
      </div>
    </nav>
  );
}

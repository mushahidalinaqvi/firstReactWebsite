import {Link} from "react-router-dom"
function Footer() {
  return (
    < >
      <footer className="bg-dark text-light  text-center text-lg-start mt-5" style={{paddingTop:'50px'}} >
        <div className="container p-4 text-light " >
          {/* Section: Links */}
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Company</h5>
              <ul className="list-unstyled">
                <li>
                 <Link to='/about'>About Us</Link>
                </li>
                <li>
                  <a href="#" className="text-light">Careers</a>
                </li>
                <li>
                  <a href="#" className="text-light">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="text-light">Terms of Service</a>
                </li>
              </ul>
            </div>
  
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0 ">
              <h5 className="text-uppercase">Support</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-light">Help Center</a>
                </li>
                <li>
                  <a href="#" className="text-light">Contact Us</a>
                </li>
                <li>
                  <a href="#" className="text-light">FAQs</a>
                </li>
              </ul>
            </div>
  
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Follow Us</h5>
              <ul className="list-unstyled d-flex justify-content-center">
                <li className="me-3">
                  <a href="#" className="text-light">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="me-3">
                  <a href="#" className="text-light">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="me-3">
                  <a href="#" className="text-light">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li className="me-3">
                  <a href="#" className="text-light">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
  
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Subscribe</h5>
              <form action="">
                <input
                  type="email"
                  className="form-control mb-2"
                  placeholder="Enter your email"
                  required
                />
                <button type="submit" className="btn btn-primary">Subscribe</button>
              </form>
            </div>
          </div>
        </div>

      </footer>
    </>
  )
}

export default Footer

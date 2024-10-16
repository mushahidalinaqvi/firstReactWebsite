
import web from '../assets/Web development.jpg'
import seo from '../assets/32 - SEO_3.jpg'
import mobile from '../assets/App development illustration.jpg'

function Services() {
  return (

       <div className="container-fluid mt-5 " style={{height:'600px', width:'80%','margin-left':'200px'}}>
      <h2 className="text-center mb-4 ">Our Services</h2>
      <div className="row">
        {/* Service 1 */}
        <div className="col-md-4"   style={{height:'300px', width :'400px'}}>
          <div className="card mb-4" >
            <img src={web} className="card-img-top" alt="Service 1" height={'250px'}/>
            <div className="card-body">
              <h5 className="card-title">Web Development</h5>
              <p className="card-text">We provide web development services to create awesome websites.</p>
              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>

        {/* Service 2 */}
        <div className="col-md-4"  style={{height:'300px', width :'400px'}}>
          <div className="card mb-4">
            <img src={seo} className="card-img-top" alt="Service 2" />
            <div className="card-body">
              <h5 className="card-title">Mobile Development</h5>
              <p className="card-text">We develop mobile applications for Android and iOS.</p>
              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>

        {/* Service 3 */}
        <div className="col-md-4" style={{height:'300px', width :'400px'}}>
          <div className="card mb-4">
            <img src={mobile} className="card-img-top" alt="Service 3" />
            <div className="card-body">
              <h5 className="card-title">SEO Services</h5>
              <p className="card-text">Boost your website visibility with our SEO services.</p>
              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  
  )
}

export default Services

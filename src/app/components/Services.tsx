export default function Services() {
    return (
      <section className="services" id="services">
        <h2 className="heading">My <span>Services</span></h2>
        <div className="services-container">
          
          <div className="services-box">
            <i className='bx bxs-paint'></i>
            <h3>Graphic Design</h3>
            <p>Creating visually stunning designs.</p>
            <a href="#" className="btn">Read More</a>
          </div>
          <div className="services-box">
            <i className='bx bx-bar-chart-alt'></i>
            <h3>Digital Marketing</h3>
            <p>Improving online presence and brand visibility.</p>
            <a href="#" className="btn">Read More</a>
          </div>
        </div>
      </section>
    );
  }
  
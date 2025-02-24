export default function Portfolio() {
    return (
      <section className="portfolio" id="portfolio">
        <h2 className="heading">Latest <span>Projects</span></h2>
        <div className="portfolio-container">
          <div className="portfolio-box">
            <img src="/images/portfolio1.jpg" alt="Project 1" width={300} height={200} />
            <h4>Web Design</h4>
          </div>
          <div className="portfolio-box">
            <img src="/images/portfolio2.jpg" alt="Project 2" width={300} height={200} />
            <h4>Web Development</h4>
          </div>
          <div className="portfolio-box">
            <img src="/images/portfolio3.jpg" alt="Project 2" width={300} height={200} />
            <h4>Web Development</h4>
          </div>
          <div className="portfolio-box">
            <img src="/images/portfolio4.jpg" alt="Project 2" width={300} height={200} />
            <h4>Web Development</h4>
          </div>
          <div className="portfolio-box">
            <img src="/images/portfolio5.jpg" alt="Project 2" width={300} height={200} />
            <h4>Web Development</h4>
          </div>
          <div className="portfolio-box">
            <img src="/images/portfolio3.jpg" alt="Project 2" width={300} height={200} />
            <h4>Web Development</h4>
          </div>
        </div>
      </section>
    );
  }
import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Python Developer Intern</h4>
                <h5>The Hoping Mind</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Developed scalable APIs using Flask, improving response time by 25%. Led backend deployment and production-level testing of endpoints.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Python Developer</h4>
                <h5>Oqlous AGI</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Built and optimized backend APIs for an Agentic AI platform, reducing data flow latency by 20%. Improved system performance via optimized database queries.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech Computer Science</h4>
                <h5>Punjab Technical University</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Expected graduation in 2026. Consistently maintaining a strong academic record with a focus on AI and backend systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

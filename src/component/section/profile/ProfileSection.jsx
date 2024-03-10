import profilePicture from "./profile.png";
import "./ProfileSection.css";

export default function Home() {
  return (
    <div id="Home" className="container p-5 my-5">
      <div className="p-5">
        <img
          className="rounded-5 shadow"
          src={profilePicture}
          width="200px"
          height="200px"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div>
        <h2>Hello World!</h2>
        <h1>
          I am <span className="theme-color">Muhammad Alfarizi Tazkia</span>,
        </h1>
        <h3>a Software Engineer</h3>
      </div>
      <p className="fs-5 mt-4">A Software Engineer who specializes in Backend Development. Has expertise in Java and Spring Framework, and has an interest in studying System Design, Functional Programming, and Machine Learning.</p>
      <div className="row mt-4 mb-3 justify-content-center m-auto">
        <div className="col-md-1">
          <center>
            <a
              target="_blank"
              className="social-media btn btn-light btn-outline-dark btn-lg btn-floating mt-2 shadow"
              href="https://github.com/MuhammadAlfariziTazkia"
              role="button"
            >
              <i className="fab fa-github"></i>
            </a>
          </center>
        </div>
        <div className="col-md-1">
          <center>
            <a
              target="_blank"
              className="social-media btn btn-light btn-outline-dark btn-lg btn-floating mt-2 shadow"
              href="https://www.linkedin.com/in/muhammad-alfarizi-tazkia/"
              role="button"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </center>
        </div>
        <div className="col-md-1">
          <center>
            <a
              target="_blank"
              className="social-media btn btn-light btn-outline-dark btn-lg btn-floating mt-2 shadow"
              href="https://www.instagram.com/muhammadalfarizi.t/"
              role="button"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </center>
        </div>
        <div className="col-md-1">
          <center>
            <a
              target="_blank"
              className="social-media btn btn-light btn-outline-dark btn-lg btn-floating mt-2 shadow"
              href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMTSDxNzdpLqxPjVkSSlpzCTCtZtVlkgTWcJhCCMJJzndGwBvtnnppLWlTtRDKlXhbtHGzk"
              role="button"
            >
              <i className="far fa-envelope"></i>
            </a>
          </center>
        </div>
        <div className="col-md-1">
          <center>
            <a
              target="_blank"
              className="social-media btn btn-light btn-outline-dark btn-lg btn-floating mt-2 shadow"
              href="https://www.youtube.com/@ruangdeveloper9776"
              role="button"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
          </center>
        </div>
      </div>
    </div>
  );
}

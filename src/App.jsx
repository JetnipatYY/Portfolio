import ProfileImg from "./assets/images/Profile.jpg";
import Notebook from "./assets/images/Notebook.png";
import GithubIcon from "./assets/images/github.png";
import LinkedinIcon from "./assets/images/linkedin.png";
import Sabaitour from "./assets/images/Sabaitour-logo.png";
import Toypaplean from "./assets/images/ToyPaplean-logo.png";
import Tohwangsoi from "./assets/images/Tohwangsoi-logo.png";
import Left from "./assets/images/left.png";
import Right from "./assets/images/right.png";
import kulogo from "./assets/images/KU.png";


import './App.css'

function App() {

  return (
    <>
      <section className="navbar">
        <h3 className="logo">
          Portfolio
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-code-xml-icon lucide-code-xml"
          >
            <path d="m18 16 4-4-4-4" />
            <path d="m6 8-4 4 4 4" />
            <path d="m14.5 4-5 16" />
          </svg>
        </h3>

        <ul className="nav-list">
          <li className="nav-item">
            <a
              href="#Home"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("Home").scrollIntoView({
                  behavior: "smooth",
                  active: "var(--peach)",
                });
              }}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("about").scrollIntoView({
                  behavior: "smooth",
                  color: "var(--peach)",
                });
              }}
            >
              About me
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#education"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("education").scrollIntoView({
                  behavior: "smooth",
                  color: "var(--peach)",
                });
              }}
            >
              Education
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("skills").scrollIntoView({
                  behavior: "smooth",
                  color: "var(--peach)",
                });
              }}
            >
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#experience"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("experience").scrollIntoView({
                  behavior: "smooth",
                  color: "var(--peach)",
                });
              }}
            >
              Experience
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact").scrollIntoView({
                  behavior: "smooth",
                  color: "var(--peach)",
                });
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </section>

      <section className="Home" id="Home">
        <div className="Home-content">
          <h1 className="Home-title">
            👋🏻Hello, I'm <span className="highlight">Jetnipat yongyuth</span>
          </h1>

          <p className="Home-subtitle">
            {" "}
            Web developer.
            <img src={Notebook} alt="Notebook" className="notebook-img" />
            / Frontend developer
          </p>

          <h1>
            I am a Bachelor of Science graduate in Information Technology with a
            strong interest in Developer roles. I specialize in Front-end
            development and UI/UX design, and I am eager to bring my knowledge
            and experience to contribute meaningfully to your organization .
          </h1>

          <button className="download-btn">Download Resume</button>

          <div className="contact-btn">
            {/* ----- GitHub button ----- */}
            <button className="github-btn">
              <img src={GithubIcon} alt="github" className="contact-icon" />
            </button>

            {/* ----- LinkedIn button ----- */}
            <button className="linkedin-btn">
              <img src={LinkedinIcon} alt="linkedin" className="contact-icon" />
            </button>

            {/* ----- Phone button ----- */}
            <button className="phone-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-phone-icon lucide-phone"
              >
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
              </svg>
              099-4192661
            </button>
          </div>
        </div>

        {/* ----- Profile image ----- */}
        <div className="profile-image">
          <img src={ProfileImg} alt="Profile" className="profile-img" />
        </div>
      </section>

      {/*----- About me section -----*/}
      <section className="about" id="about">
        <h2 className="section-title">About Me</h2>
    
        <h2 className="section-title" >Know More About Me </h2>
        <p className="section-description">
           I'm a Passionate Web Developer for creating beautiful and
          functional websites. I have experience in HTML, CSS, JavaScript, and
          React.
        </p>
      </section>

      {/*----- Education section -----*/}
      <section className="education" id="education">
        <h2 className="section-title">Education</h2>
        <div className="Kasetsart-profile">
          <img
            src= {kulogo}
            alt="Kasetsart University"
            className="ku-logo"
          />
        </div>
        
        <p className="section-description">
          I have a degree in Computer Science from the University of Technology.
          graduated in 2026 from Kasetsart University sriracha campus with a Bachelor's degree
          in Information Technology.
        </p>
        <p>GPAX 3.49 Second Class Honors</p>
      </section>

      {/* ----- Skills section ----- */}
      <section className="skills" id="skills">
        <h2 className="section-title">Skills</h2>
        &nbsp;
        <p className="section-description">
          I have a strong foundation in web development technologies and
          frameworks.
        </p>
      </section>

      {/* ----- Experience section ----- */}
      <section className="experience" id="experience">
        <h2 className="section-title">Experience</h2>
        <p className="experience-description">
          this is my experience in web development and related fields. I have
          worked on various projects and have gained valuable experience in the
          industry.
        </p>

        {/*-------  Carrousel for experience images  -------*/}
        <div className="carousel-ctn">

          {/* left button */}
          <div className="left-btn"> 
            <img 
             src={Left}
             className= "nextprev-img"
            />
           </div>

          <div className="carousel-item" id = "project-1">
            <img
              src={Sabaitour}
              alt="Experience 1"
              className="projectlogo"
            />
            {/* <h3 className="experience-subtitle">Web Development Experience</h3> */}
            <p></p>
          </div>

          <div className="carousel-item" id = "project-2">
            <img
              src={Toypaplean}
              alt="Experience 2"
               className="projectlogo"
            />
          </div>

          <div className="carousel-item" id = "project-3">
            <img
              src={Tohwangsoi}
              alt="Experience 3"
                className="projectlogo"
            />
          </div>
        </div>

        {/* right-button */}
        <div className="right-btn">
             <img 
             src={Right}
             className= "nextprev-img"
            />
        </div>

      </section>

      {/* ----- Contact section ----- */}
      <section className="contact" id="contact">
        <h2 className="section-title">Contact</h2>
        &nbsp;
        <p className="section-description">
          Feel free to reach out to me if you have any questions or
          opportunities!
        </p>
      </section>
    </>
  );
}

export default App

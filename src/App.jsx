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
              href="#Intro"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("Intro").scrollIntoView({
                  behavior: "smooth",
                  active: "var(--peach)",
                });
              }}
            >
              Introduction
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

      <section className="intro" id="Intro">
        <div className="intro-content">

          <h1 className="intro-title">
            👋🏻Hello, I'm <span className="highlight">Jetnipat yongyuth</span>
          </h1>

          <p className="intro-subtitle"> Web developer. </p>

          <button className="download-btn">Download Resume</button>

          <div className="contact-btn">
            {/* ----- GitHub button ----- */}
            <button className="github-btn">
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
                className="lucide lucide-github-icon lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>

              {/* <img src="/assets/images/github.png" alt="github" /> */}
            </button>

            {/* ----- LinkedIn button ----- */}
            <button className="linkedin-btn">
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
                className="lucide lucide-linkedin-icon lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </button>

            {/* ----- Facebook button ----- */}
            <button className="facebook-btn">
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
                className="lucide lucide-facebook-icon lucide-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </button>

            {/* ----- Instagram button ----- */}
            <button className="instagram-btn">
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
                className="lucide lucide-instagram-icon lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </button>

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

        <div className="profile-image">
          <img
            src="./assets/images/ProfilePort.jpg"
            alt="Profile"
            className="profile-img"
          />
        </div>
      </section>

      {/*----- About me section -----*/}
      <section className="about" id="about">
        <h2 className="section-title">About Me</h2>
        &nbsp; {/* &nbsp is used to space the words in line*/}
        <p className="section-description">
          I am a web developer with a passion for creating beautiful and
          functional websites. I have experience in HTML, CSS, JavaScript, and
          React.
        </p>
      </section>

      {/*----- Education section -----*/}
      <section className="education" id="education">
        <h2 className="experience-title">Education</h2>
        &nbsp;
        <div className="Kasetsart-profile">
          <img
            src="./assets/images/Kasetsart.png"
            alt="Kasetsart University"
            className="Kasetsart-img"
          />
        </div>
        <p className="section-description">
          I have a degree in Computer Science from the University of Technology.
          graduated in 2026 from Kasetsart University with a Bachelor's degree
          in Information Technology.
        </p>
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

        <h2 className="experience-title">Experience</h2>
        <p className="experience-description">
            this is my experience in web development and related fields. I have
            worked on various projects and have gained valuable experience in
            the industry.
        </p>

        {/*-------  Carrousel for experience images  -------*/}
        <div className="carousel-ctn">
          <div className="left-btn"></div>

            <div className="carousel-item">

              
              <img
                src="./assets/images/experience1.png"
                alt="Experience 1"
                className="experience-img"
              />
                <h3 className="experience-subtitle">Web Development Experience</h3>
              <p></p>

            </div>

            <div className="carousel-item">
              <img
                src="./assets/images/experience2.png"
                alt="Experience 2"
                className="experience-img"
              />
            </div>

            <div className="carousel-item">
              <img
                src="./assets/images/experience3.png"
                alt="Experience 3"
                className="experience-img"
              />
            </div>

          </div>
          <div className="right-btn"></div>

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

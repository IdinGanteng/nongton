import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { Profile } from "./Profile";
import projImg1 from "../assets/img/iboost.png";
import projImg2 from "../assets/img/octopus.png";
import projImg3 from "../assets/img/idinLogo2.png";
import projImg4 from "../assets/img/praxis-student.jpeg"
import profileImg from "../assets/img/idin.jpeg"
import colorSharp2 from "../assets/img/color-sharp2.png";
import mentorImg from "../assets/img/mentor.jpeg";
import contentWriterImg from "../assets/img/content-writer.jpeg";
import frontendImg from "../assets/img/frontend.jpeg"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "iBoost Corporate",
      description: "Mengembangkan produk pengiriman pesan secara masal dengan bekerja sama dengan perusahaan telekomunikasi di Indonesia, dengan tujuan membantu UMKM untuk membuka pasar",
      imgUrl: projImg1,
    },
    {
      title: "Octopus edc",
      description: "OCTOPUS Eduction adalah platform digital untuk pendidikan sekolah dasar sampai menengah atas",
      imgUrl: projImg2,
    },
    {
      title: "Idin Blogspot",
      description: "Merupakan website pribadi saya yang berisikan biodata diri saya. Juga beberapa portofolio.",
      imgUrl: projImg3,
    },
    {
      title: "Praxis For Student",
      description: "Adalah kelas online web development, python, dan pemrograman lain, yang ditujukan untuk para siswa dari sekolah menengah pertama dan menengah keatas.",
      imgUrl: projImg4,
    },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg2,
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg3,
    // },
  ];
 const profile = [
  {
      title: "Riski Maulidin Akbar",
      description: "Web Development",
      imgUrl: profileImg,
 },{
      desc:"WHATS UP! A man born in 2004, im a front end development who studied at Senior High School, and joined the Praxis Academy bootcamp in Yogyakarta, July 2022.The second son, who is usually called Idin, from the couple Maryono and Fatkhah, has a hobby of playing music. I'm currently exploring web development and programming languages ​​like JavaScript."
 }
]
const experience = [
  {
    title:"Mentoring Web Programming",
    description:"Mentor for Techno Natura Jogja madrasa school children equivalent to elementary and middle school (September 2022-present). Provides HTML CSS JavaScript development learning",
    imgUrl:mentorImg
  },
  {
    title:"Content Writer",
    description:"Content writer at Hellymedia.com media and journalist (August 2023-present). Write 5 articles a day and try to find the latest ideas and innovations.",
    imgUrl:contentWriterImg
  },
  {
    title:"Frontend Developer",
    description:"Frontend developer internship at Praxis Academy Yogyakarta (August 2022 - present). Working on client projects using tools such as JavaScript libraries and CSS frameworks",
    imgUrl:frontendImg
  }
]
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">About Me</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Project</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Experience</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                  <Tab.Pane eventKey="first">
                    
                      <Row>
                        {
                          profile.map((profile, index) => {
                            return (
                              <Profile
                                key={index}
                                {...profile}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                                
                            )
                          })
                        }
                        
                      </Row>
                      
                    </Tab.Pane>
                    
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          experience.map((experiences, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...experiences}
                                />
                                
                            )
                          })
                        }
                        
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
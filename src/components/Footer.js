import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import SendMessage from "./SendMessage";
import logo from "../assets/img/idinLogo2.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <Container>
        <Row className="align-items-center">
          <SendMessage/>
          {/* <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col> */}
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/riski-maulidin-akbar-43a793276/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://web.facebook.com/profile.php?id=100094895471714" target="_blank"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/donquixote_doff/" target="_blank"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
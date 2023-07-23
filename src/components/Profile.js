import { Col } from "react-bootstrap";

export const Profile = ({ title, description, imgUrl, desc }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
      <p style={{width:"100%"}}>{desc}</p>
    </Col>
  )
}
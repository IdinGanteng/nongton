import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const SendMessage = () => {
  const pesan = "Hai, Lets Connect!";
  const pesanWA = () => {
    const url = `https://wa.me/+6285848940211?text=${encodeURIComponent(
      pesan
    )}`;
    window.open(url);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setTimeout(pesanWA, 3000);
  };
  return (
    <Col lg={12}>
    <div className="contact-wa">
      <button type="button" className="btn btn-success" onClick={onSubmit}>Connect Via Whatsapp</button>
      <button type="button" className="btn btn-success"><a href="mailto:kanggayus101@gmail.com">Connect Via Email</a></button>
    </div>
    </Col>
  );
};

export default SendMessage;

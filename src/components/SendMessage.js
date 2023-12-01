import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const PDF_FILE_URL = 'http://localhost:3000/my_cv.pdf'

const SendMessage = () => {
  const downloadFile =(url)=>{
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }
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
      <button type="button" className="btn btn-outline-success" onClick={onSubmit}>Connect Via Whatsapp</button>
      <button type="button" className="btn btn-success"><a href="mailto:kanggayus101@gmail.com">Connect Via Email</a></button>
      <button type="button" className="btn btn-outline-success" onClick={()=>{downloadFile(PDF_FILE_URL)}}>Download File Resume</button>
    </div>
    </Col>
  );
};

export default SendMessage;

import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/myresume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Link } from "react-router-dom";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


// import React, { useEffect } from "react";

function ResumeNew() {
  const resumeLink =
    "https://drive.google.com/file/d/1ceJOj7wMHiG6oi1YNrlxLofGrU6gJBvj/view?usp=sharing";

  useEffect(() => {
    window.location.href = resumeLink;
  }, []);

  return null; // You can return null or an empty component since we don't need to render anything
}

export default ResumeNew;


// export default ResumeNew;

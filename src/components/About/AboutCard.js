import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shadab Malik </span>
            from <span className="purple"> Saharanpur, Uttar Pradesh, India.</span>
            <br />I am a Computer Science student at IIIT GWALIOR.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading novels and books.
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing poetries, StarGazing and Admiring the Moon.
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I want the best for him, and that's me!"{" "}
          </p>
          <footer className="blockquote-footer">Shadab Malik</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

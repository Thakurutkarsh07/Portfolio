import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Utkarsh Pratap Singh </span>
            from <span className="purple"> Uttar Pradesh, India.</span>
            <br />
            I am a student at Lovely Professional University.
            <br />
            Pursuing B.Tech in Computer Science and Engineering with specialization in Data Science and Machine Learning.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Skating
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I believe in progress built on collaboration, where success is not achieved at the expense of others' losses."{" "}
          </p>
          <footer className="blockquote-footer">Utkarsh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

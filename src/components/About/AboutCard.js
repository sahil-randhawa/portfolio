import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        Hi Everyone, I am <span className="purple">Sahildeep Singh Randhawa </span>
                        from <span className="purple"> Toronto, Canada.</span>
                        <br /> I am a web and mobile app developer with experience in building web applications using React.js & Node.js.
                        <br />
                        Currently, I am pursuing a post grad diploma in mobile app development from George Brown College, Toronto.
                        <br />
                        <br />
                        Apart from coding, some other activities that I love to do!
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight /> Playing Chess
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Cooking
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Travelling
                        </li>
                    </ul>

                    <p style={{ color: "rgb(155 126 172)" }}>
                        "Embrace the challenges, grow through the journey, <br />and let your resilience define you."{" "}
                    </p>
                    {/* <footer className="blockquote-footer">Personal Moto</footer> */}
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;
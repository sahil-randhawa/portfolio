import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
    AiFillGithub,
    AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
    // let date = new Date();
    // let year = date.getFullYear();
    return (
        <Container fluid className="footer">
            <Row>
                <Col md="6" className="footer-copywright">
                    <h3>Portfolio by Sahil Randhawa</h3>
                </Col>
                <Col md="6" className="footer-body">
                    <ul className="footer-icons">
                        <li className="social-icons">
                            <a
                                href="https://github.com/sahil-randhawa"
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillGithub />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.linkedin.com/in/sahilrandhawa/"
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedinIn />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="mailto:sahil@artooanl.com"
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillMail />
                            </a>
                        </li>
                        {/* <li className="social-icons">
                            <a
                                href="https://www.instagram.com/"
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillInstagram />
                            </a>
                        </li> */}
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;

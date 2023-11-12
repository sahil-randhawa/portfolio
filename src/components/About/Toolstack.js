import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiVisualstudiocode,
    SiSlack,
    // SiVercel,
    SiMacos,
    SiJirasoftware,
    SiExpo,
    SiAndroidstudio,
    SiXcode,
} from "react-icons/si";

function Toolstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <SiVisualstudiocode />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiSlack />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiMacos />
            </Col>
            {/* Jira */}
            <Col xs={4} md={2} className="tech-icons">
                <SiJirasoftware />
            </Col>
            {/* Expo */}
            <Col xs={4} md={2} className="tech-icons">
                <SiExpo />
            </Col>
            {/* Android Studio */}
            <Col xs={4} md={2} className="tech-icons">
                <SiAndroidstudio />
            </Col>
            {/* Xcode */}
            <Col xs={4} md={2} className="tech-icons">
                <SiXcode />
            </Col>
            {/* <Col xs={4} md={2} className="tech-icons">
                <SiVercel />
            </Col> */}
        </Row>
    );
}

export default Toolstack;
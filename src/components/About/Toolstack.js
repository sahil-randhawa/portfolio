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
                <p className="stack-item-name">Visual Studio</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiSlack />
                <p className="stack-item-name">Slack</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiMacos />
                <p className="stack-item-name">MacOS</p>
            </Col>
            {/* Jira */}
            <Col xs={4} md={2} className="tech-icons">
                <SiJirasoftware />
                <p className="stack-item-name">Jira</p>
            </Col>
            {/* Expo */}
            <Col xs={4} md={2} className="tech-icons">
                <SiExpo />
                <p className="stack-item-name">Expo</p>
            </Col>
            {/* Android Studio */}
            <Col xs={4} md={2} className="tech-icons">
                <SiAndroidstudio />
                <p className="stack-item-name">Android Studio</p>
            </Col>
            {/* Xcode */}
            <Col xs={4} md={2} className="tech-icons">
                <SiXcode />
                <p className="stack-item-name">Xcode</p>
            </Col>
            {/* <Col xs={4} md={2} className="tech-icons">
                <SiVercel />
            </Col> */}
        </Row>
    );
}

export default Toolstack;
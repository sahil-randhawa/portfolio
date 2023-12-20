import React from "react";
import { Col, Row } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiPython,
    DiGit,
    DiJava,
    DiSwift,
} from "react-icons/di";
import {
    // SiRedis,
    SiFirebase,
    // SiNextdotjs,
    // SiSolidity,
    SiPostgresql,
    SiExpress,
} from "react-icons/si";
import { BsWordpress } from "react-icons/bs";
import {
    // TbBrandGolang, 
    TbBrandKotlin
} from "react-icons/tb";

function Techstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <DiJavascript1 />
                <p className="stack-item-name">JavaScript</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiNodejs />
                <p className="stack-item-name">NodeJS</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiReact />
                <p className="stack-item-name">ReactJS</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiMongodb />
                <p className="stack-item-name">MongoDB</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiExpress />
                <p className="stack-item-name">ExpressJS</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiGit />
                <p className="stack-item-name">Git</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiSwift />
                <p className="stack-item-name">Swift</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiFirebase />
                <p className="stack-item-name">Firebase</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPostgresql />
                <p className="stack-item-name">PostgreSQL</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <TbBrandKotlin />
                <p className="stack-item-name">Kotlin</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiPython />
                <p className="stack-item-name">Python</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJava />
                <p className="stack-item-name">Java</p>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <BsWordpress />
                <p className="stack-item-name">WordPress</p>
            </Col>
        </Row>
    );
}

export default Techstack;
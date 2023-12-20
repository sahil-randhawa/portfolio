import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {
    AiOutlineGithub,
} from "react-icons/ai";

function Github() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
                Days I <strong className="purple">Code</strong>
            </h1>
            <GitHubCalendar
                username="sahil-randhawa"
                blockSize={15}
                blockMargin={5}
                color="#c084f5"
                fontSize={16}
            />
            <div style={
                {
                    zIndex: 10,
                }
            }>
                <Button
                    href="https://github.com/sahil-randhawa"
                    target="_blank"
                    className="fork-btn-inner"
                >
                    <AiOutlineGithub style={{ marginBottom: "2px", fontSize: "1.1em" }} /> GitHub
                </Button>
            </div>
        </Row >
    );
}

export default Github;
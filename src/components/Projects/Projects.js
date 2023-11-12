import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import evRental from "../../Assets/Projects/evRental.jpeg";
import evRental2 from "../../Assets/Projects/evRental2.jpeg";
import eventFinder from "../../Assets/Projects/eventFinder.png";
import eventFinder2 from "../../Assets/Projects/eventFinder2.png";
import guessNumber from "../../Assets/Projects/guessNumber.png";
import libApp from "../../Assets/Projects/libApp.png";
import cinemaApp from "../../Assets/Projects/cinemaApp.png";

function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are a few projects I've worked on recently.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={evRental}
                            imgPath2={evRental2}
                            isBlog={false}
                            title="EV Rental App"
                            description="EV Rental app is a cross-platform app built using React Native, Firebase, and Google Maps API. It allows EV owners to list their EV for rent and renters to view the listings. Owners can approve or reject booking requests by the renters."
                            ghLink="https://github.com/sahil-randhawa/EV_Rental_OwnerApp"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={eventFinder}
                            imgPath2={eventFinder2}
                            isBlog={false}
                            title="Event Finder iOS App"
                            description="Event Finder iOS is an app to explore nearby events, concerts, games, etc. It uses the Eventbrite API to fetch the events. The app is build using Swift and Xcode."
                            ghLink="https://github.com/sahil-randhawa/Event-Finder-iOS"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={cinemaApp}
                            isBlog={false}
                            title="Cinema Booking System"
                            description="Cinema Booking System is a web app to book tickets for movies. It is build using Javascript, HTML, CSS."
                            ghLink="https://github.com/sahil-randhawa/movie-project-mads4007"
                            demoLink="https://sahil-randhawa.github.io/movie-project-mads4007"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={libApp}
                            isBlog={false}
                            title="Library Management System"
                            description="Built with Node.js and Express, the Library Management System is a web application designed to help manage books in a library. With this app, users can easily check the status of available and borrowed books, as well as checkout a book. The app is fast, reliable, and easy to use."
                            ghLink="https://github.com/sahil-randhawa/bookslibrary"
                            demoLink="https://bookslibrary.cyclic.app"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={guessNumber}
                            isBlog={false}
                            title="Guess the Number Game"
                            description="Guess the Number Game is a simple game built using Javascript. The game generates a random number between a given range and the user has to guess the number. The game also keeps track of the number of attempts made by the user."
                            ghLink="https://github.com/sahil-randhawa/guess-the-number-game"
                            demoLink="https://sahil-randhawa.github.io/guess-the-number-game"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
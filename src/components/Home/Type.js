import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <><h2>Web Developer</h2>
            <Typewriter
                options={{
                    strings: [
                        "Mobile App Dev",
                        "MERN Stack Dev",
                        "Freelancer",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                }}
            /></>
    );
}

export default Type;
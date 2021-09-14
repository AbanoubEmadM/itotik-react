import React from "react";
import AboutImg from './about1.svg'
import AboutImg2 from './about2.svg'
import './_style.scss'
const About = () => {
    return(
        <div className="about">
            <div className="container">
                <h2 className="text-center">About Us</h2>
                <p className="text-center">dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et <br/> dolore magna aliqua. this dolor sit amet.</p>
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        <h3>Modern design with Essential Features</h3>
                        <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam <br/>nonumy eirmod tempor invidunt ut labore et dolore magna <br/> aliquyam erat, sed diam voluptua. At vero eos et accusam et justo <br/> duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata<br/> sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,<br /> consetetur sadipscing.
                        </p>
                        <button>Learn Now </button>
                    </div>
                    <div className="col-md-6 col-xs-12">
                        <img src={AboutImg} className="img-fluid" />
                    </div>
                    <div className="col-md-6 col-xs-12">
                        <img src={AboutImg2} className="img-fluid" />
                    </div>
                    <div className="col-md-6 col-xs-12">
                        <h3>Modern design with Essential Features</h3>
                        <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam <br/>nonumy eirmod tempor invidunt ut labore et dolore magna <br/> aliquyam erat, sed diam voluptua. At vero eos et accusam et justo <br/> duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata<br/> sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,<br /> consetetur sadipscing.
                        </p>
                        <button>Learn Now </button>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default About;
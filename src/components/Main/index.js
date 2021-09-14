import React from "react";
import './_style.scss'
import Bg from'..//Main/banner.png';
import svg from'..//Main/header-shape.svg';
const Main = () => {
    return(
        <div className="main">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>Business is Now Digital</h2>
                        <p>We blend insights and strategy to create digital products<br /> for forward-thinking organisations.</p>
                    <button>Download</button>
                    </div>
                    <div className="col-md-6">
                        <img className="bg img-fluid" src={Bg} alt=""/>
                    </div>
                </div>
            </div>
            <img className="svg img-fluid" src={svg} alt=""/>
        </div>
    )
}
export default Main;
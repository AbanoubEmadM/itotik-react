import React , {Component} from "react";
import axios from "axios";
import './_style.scss'
class Footer extends Component{
    render(){
        return(
            <div className="footer text-center">
                <img src="/images/footer-shape.svg" className="img-fluid"/>
                <div className="content">
                    <img src="/images/logo.svg"/><br/>
                    <span>+8801234567890</span><br/>
                    <span>support@uideck.com</span>
                </div>
                <div className="social">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-linkedin"></i>
                </div>
                <div className="copyright">
                    <p>2020 &copy;itotek. Design by Setblue.</p>
                </div>
            </div>
        )
    }
}
export default Footer;
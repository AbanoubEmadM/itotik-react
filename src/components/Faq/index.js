import React, { Component }  from "react";
import axios from "axios";
import $ from 'jquery';
import './_style.scss'
class FAQ extends Component {
    state = {
        faq:[]
    };
    componentDidMount(){
        axios.get('js/data.json').then(res => {
            this.setState({
                faq:res.data.faq
            })
        })
        $(function(){
            $(".head").click(function(){
                $(this).next().slideToggle();
                $(".desc").not($(this).next()).slideUp()
                $(this).children().toggleClass("clicked");
            })                   
        })
    }
    render(){ 
        const {faq} = this.state;
        const AllFaq = faq.map(faqItem => {
            return( 
            <div key={faqItem.id}>
            <h5 className="head">{faqItem.title} <i className={faqItem.icon}></i> </h5>
            <p className="desc">{faqItem.desc} </p>
            </div>
            )
        })
    return(
        <div className="faq">
            <div className="container">
                <h2>Frequently Asked</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut<br /> labore et dolore magna aliqua.</p>
                <div className="row">
            <div className="col-md-6 col-xs-12">
                    {AllFaq}
                    </div>
                    <div className="col-md-6 col-xs-12">
                        <img src="/images/faq.svg" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
}
export default FAQ;
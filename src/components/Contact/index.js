import React , {Component} from "react";
import axios from "axios";
import {ContactSection , Address , MainDesc , ContactBox , Icon , InpText , InpEmail , InpNumber , Form , MainHeading , TextArea , Btn} from  './style.js'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

class Contact extends Component {
    state = {
        contact:[],
        center: {
            lat: 59.95,
            lng: 30.33
          },
          zoom: 11      
    };
    componentDidMount() {
        axios.get('js/data.json').then(res => {
            this.setState({
                contact:res.data.contact
            })
        })
    }
    render() {
        const {contact} = this.state;
        const AllContacts = contact.map(contactItem => {
            return(
                <div className="col-md-4  col-xs-6">
                    <ContactBox>
                    <Icon id="i" className={contactItem.icon}></Icon>
                    <Address>{contactItem.address} </Address>
                    <Address>{contactItem.add2} </Address>
                    </ContactBox>
                </div>
            )
        })
        return(
            <ContactSection>
            <div className="container text-center">
                <MainHeading>Need Help? Say Hello</MainHeading>
                <MainDesc>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut<br /> labore et dolore magna aliqua.</MainDesc>
            <div className="row">
            {AllContacts}   
            </div>
            <div className="row">
            <div className="col-md-6 col-xs-12">
                    <Form>
                        <InpText placeholder="Your Name"/>
                        <InpText placeholder="Your Email"/>
                        <InpEmail placeholder="Subject"/>
                        <InpNumber placeholder="Phone"/>
                        <TextArea placeholder="subject"></TextArea>
                        <Btn>Send Message</Btn>
                    </Form>
                </div>
                <div className="col-md-6 col-xs-12">
                <div style={{ width: '100%' }}>
                <LoadScript
        googleMapsApiKey="AIzaSyDZtXLgqQXeSfBZaMq4_fKqP9Af9iKH1WQ"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
      </div>
                </div>
            </div>
            </div>
            </ContactSection>
        )
    }
}
export default Contact
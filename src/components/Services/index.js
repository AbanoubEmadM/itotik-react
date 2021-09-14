import React , {Component} from "react";
import axios from "axios";
import {ServicesSection , IconBox , Icon ,Title , Desc , SrvBox, Link} from './style.js'

class Services extends Component{
    state = {
        service: []
    }

    componentDidMount(){
        axios.get('js/data.json').then(res => {
            this.setState({
                service:res.data.services
            })
        })
    }


render(){
    const {service} = this.state;
    const AllBoxes = service.map(serviceItem => {
        return(
        <div key={serviceItem.id} className="col-md-4 col-sm-6 col-xs-12" >
            <SrvBox>
                <IconBox>
                <Icon className={serviceItem.icon}></Icon>
                <Title>{serviceItem.title} </Title>
                </IconBox>
            <Desc>{serviceItem.desc}</Desc>
            <Link href="$#">{serviceItem.link} </Link>
        </SrvBox>
        </div>
        )
    })
    return(
            <ServicesSection>
                <div className="container">
                    <div className="row">
                        {AllBoxes}
                    </div>
                </div>
        </ServicesSection>
    )
    
}
}
export default Services
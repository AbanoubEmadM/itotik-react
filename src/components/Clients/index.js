import React , {Component} from "react";
import axios from "axios";
import {ClientsSection , Overlay , ClientBox , Icon , IconQ , Desc , Flex , Image , Name , Job , MainHeading , MainP} from './style'
import { Swiper, SwiperSlide } from 'swiper/react';

class Clients extends Component {

    state = {
        clients:[]
    };
    componentDidMount() {
        axios.get('js/data.json').then(res => {
            this.setState({
                clients:res.data.clients
            })
        })
    }
    render() {
        const {clients} = this.state;
        const AllClients = clients.map(client => {
            return(
                <div key={client.id} className="col-md-4 col-xs-6">
                    <ClientBox>
                    <IconQ className={client.iconQ}></IconQ>
                    <Icon className={client.icon}></Icon>
                    <Icon className={client.icon}></Icon>
                    <Icon className={client.icon}></Icon>
                    <Icon className={client.icon}></Icon>
                    <Icon className={client.icon}></Icon>
                    <Desc>{client.desc}</Desc>
                    <Flex>
                    <Image src={client.img} />
                    <Name>{client.name} <Job>{client.job} </Job></Name>
                    </Flex>
                    </ClientBox>
                </div>
            )
        })
        return(
            <ClientsSection>
                <Overlay>
                    <MainHeading>What Clients Say</MainHeading>
                    <MainP> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut<br /> labore et dolore magna aliqua.</MainP>
                <div className="container">
                    <div className="row">
                        {AllClients}
                        <span data="first"></span>
                        <span data="second"></span>
                        <span data="third"></span>
                    </div>
                </div>
                </Overlay>
            </ClientsSection>
        )
    }
}
export default Clients
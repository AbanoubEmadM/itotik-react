import React , {Component} from "react";
import axios from "axios";
import {PriceBox ,Title , PriceNumber , Time , ListItem , Icon , Btn , MainHeading , MainP} from './style'
import svg from'..//Pricing/price-shape.svg';
class Pricing extends Component{
    state = {
        prices: []
    };
    componentDidMount() {
        axios.get('js/data.json').then(res => {
            console.log(res.data.pricing);
            this.setState({
                prices:res.data.pricing
            })
        })
    }
    render() {
        const {prices} = this.state;
        const AllPrices = prices.map(price => {
            return(
                <div className="col-md-4 col-sm-6 col-xs-12" key={price.id}>
                <PriceBox >
                    <Title>{price.title} </Title>
                    <PriceNumber>{price.price} </PriceNumber>
                    <Time>{price.time} </Time>
                    <ul className="list-unstyled">
                        <ListItem><Icon className="far fa-arrow-alt-circle-right"></Icon>{price.desc1}</ListItem>
                        <ListItem><Icon className="far fa-arrow-alt-circle-right"></Icon>{price.desc2}</ListItem>
                        <ListItem><Icon className="far fa-arrow-alt-circle-right"></Icon>{price.desc3}</ListItem>
                        <ListItem><Icon className="far fa-arrow-alt-circle-right"></Icon>{price.desc4}</ListItem>
                    </ul>
                    <Btn>Buy Now</Btn>
                    <img src={svg} className="img-fluid" />
                </PriceBox>
                </div>
            )
        })
        return(
            <div className="prices text-center">
                <div className="container">
                    <MainHeading>Our Pricing </MainHeading>
                    <MainP>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut <br/>labore et dolore magna aliqua.</MainP>
                    <div className="row">
                            {AllPrices}
                    </div>
                </div>
            </div>
        )
    }
}
export default Pricing;
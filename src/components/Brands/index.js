import React , {Component} from "react";
import axios from "axios";
import {BrandsSection , Img} from './style'
class Brands extends Component {
    state = {
        brands: []
    };
    componentDidMount() {
        axios.get('js/data.json').then(res => {
            this.setState({
                brands:res.data.brands
            })
        })
    };
    render() {
        const {brands} = this.state;
        const AllBrands = brands.map(brand => {
            return(
                <div className="col-md-2 col-xs-6">
                    <BrandsSection>
                <Img src={brand.img}/>
                </BrandsSection>
            </div>

            )
        })
        return (
            <div className="container">
            <div className="row">
            {AllBrands}
            </div>
            </div>
        )
    }
}
export default Brands;
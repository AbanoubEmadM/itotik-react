import React , {Component} from "react";
import axios from "axios";
import {TeamSection , Img ,Name , Job , TeamBox, ImageMain , TeamSocial , Icon , MainHeading , MainDesc} from './style'

class Team extends Component {
    state = {
        team: []
    };
    componentDidMount() {
        axios.get('js/data.json').then(res => {
            this.setState({
                team: res.data.work
            })
        })
    }
    render() {
        const {team} = this.state;
        const AllTeams = team.map(TeamItem => {
            return(
                <div key={TeamItem.id} className="col-md-4 col-sm-6 col-xs-12" >
                    <TeamBox>
                    <ImageMain>
                    <Img src={TeamItem.img} />
                    <TeamSocial>
                    <Icon className={TeamItem.icon1}></Icon>
                    <Icon className={TeamItem.icon2}></Icon>
                    <Icon className={TeamItem.icon3}></Icon>
                    <Icon className={TeamItem.icon4}></Icon>
                    </TeamSocial>
                    </ImageMain>
                    <Name>{TeamItem.name} </Name>
                    <Job>{TeamItem.job} </Job>
                    </TeamBox>
                </div>
            )
        })
        return(
            <TeamSection>
                <div className="container">
                    <MainHeading>Meet Our Team</MainHeading>
                    <MainDesc> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut<br/> labore et dolore magna aliqua.</MainDesc>
                    <div className="row">
                        {AllTeams}
                    </div>
                </div>
            </TeamSection>
        )
    }
}
export default Team;
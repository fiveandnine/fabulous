import React, {Component} from 'react';
import './homePage.css';
import {hashHistory} from 'react-router';
class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locationList: [
                {
                    location: "Russia",
                    url: "./img/profile/profile1.jpg"
                },{
                    location: "Thailand",
                    url: "./img/profile/profile2.jpg"
                },{
                    location: "Cambodia",
                    url: "./img/profile/profile3.jpg"
                },{
                    location: "Vietnam",
                    url: "./img/profile/profile4.jpg"
                }
            ]
        }
    }

    componentDidMount() {

    }

    toCollection = (location) => {
        // console.log(location);
        hashHistory.push({
            pathname: 'collection',
            query: {
                location: location
            }
        })
    }

    render() {
        return (
            <div className="homePageContainer">
                {this.state.locationList && this.state.locationList.map((item)=>{
                    return (
                        <div key={item.location} className="homePageItem"
                             onClick={() => {
                                 this.toCollection(item.location)
                             }}>
                            {/*<div>{item.location}</div>*/}
                            <img
                                src={item.url}/>
                        </div>
                    )
                })}



            </div>
        )
    }
}
export default HomePage;
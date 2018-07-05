/**
 * Created by xiaolei on 2018/2/13.*/
import React, {Component} from 'react';
import './CollectionPage.css'
class CollectionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            urlList: {
                Russia: [
                    {url: './img/collections/Russia/1.jpg'},
                    {url: './img/collections/Russia/2.jpg'},
                    {url: './img/collections/Russia/3.jpg'},
                    {url: './img/collections/Russia/4.jpg'},
                    {url: './img/collections/Russia/5.jpg'},
                    {url: './img/collections/Russia/6.jpg'},
                    {url: './img/collections/Russia/7.jpg'},
                    {url: './img/collections/Russia/8.jpg'},
                    {url: './img/collections/Russia/9.jpg'},
                    {url: './img/collections/Russia/10.jpg'},
                    {url: './img/collections/Russia/11.jpg'},
                    {url: './img/collections/Russia/12.jpg'},
                    {url: './img/collections/Russia/13.jpg'},
                    {url: './img/collections/Russia/14.jpg'},
                    {url: './img/collections/Russia/15.jpg'},
                    {url: './img/collections/Russia/16.jpg'}
                ],
                Thailand: [
                    {url: './img/collections/Thailand/1.jpg'},
                    {url: './img/collections/Thailand/2.jpg'},
                    {url: './img/collections/Thailand/3.jpg'},
                    {url: './img/collections/Thailand/4.jpg'},
                    {url: './img/collections/Thailand/5.jpg'},
                    {url: './img/collections/Thailand/6.jpg'},
                    {url: './img/collections/Thailand/7.jpg'},
                    {url: './img/collections/Thailand/8.jpg'},
                    {url: './img/collections/Thailand/9.jpg'},
                    {url: './img/collections/Thailand/10.jpg'},
                    {url: './img/collections/Thailand/11.jpg'},
                    {url: './img/collections/Thailand/12.jpg'},
                    {url: './img/collections/Thailand/13.jpg'},
                    {url: './img/collections/Thailand/14.jpg'},
                    {url: './img/collections/Thailand/15.jpg'},
                    {url: './img/collections/Thailand/16.jpg'}
                ], Cambodia: [
                    {url: './img/collections/Cambodia/1.jpg'},
                    {url: './img/collections/Cambodia/2.jpg'},
                    {url: './img/collections/Cambodia/3.jpg'},
                    {url: './img/collections/Cambodia/4.jpg'},
                    {url: './img/collections/Cambodia/5.jpg'},
                    {url: './img/collections/Cambodia/6.jpg'},
                    {url: './img/collections/Cambodia/7.jpg'},
                    {url: './img/collections/Cambodia/8.jpg'},
                    {url: './img/collections/Cambodia/9.jpg'},
                    {url: './img/collections/Cambodia/10.jpg'}
                ],
                Vietnam: [
                    {url: './img/collections/Vietnam/1.jpg'},
                    {url: './img/collections/Vietnam/2.jpg'},
                    {url: './img/collections/Vietnam/3.jpg'},
                    {url: './img/collections/Vietnam/4.jpg'},
                    {url: './img/collections/Vietnam/5.jpg'},
                    {url: './img/collections/Vietnam/6.jpg'},
                    {url: './img/collections/Vietnam/7.jpg'},
                    {url: './img/collections/Vietnam/8.jpg'},
                    {url: './img/collections/Vietnam/9.jpg'},
                    {url: './img/collections/Vietnam/10.jpg'},
                    {url: './img/collections/Vietnam/11.jpg'},
                    {url: './img/collections/Vietnam/12.jpg'}
                ]
            }
        }
    }

    render() {
        return (
            <div className="collectionContainer">
                {
                    this.state.urlList[this.props.location.query.location] && this.state.urlList[this.props.location.query.location].map((item, key) => {
                        return (
                            <div className="Image"
                                 key={key}>
                                <img
                                    src={item.url}
                                    alt=""/>
                            </div>
                        )
                    })
                }


            </div>
        )
    }
}
export default CollectionPage;
/**
 * Created by xiaolei on 2018/2/14.
 */
import React, {Component} from 'react';
import './AddImg.css'
class AddImg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // imgUrl: "./img/addPic1.png"
        }
    }

    getImgUrl = (e) => {
        if (window.FileReader) {
            let fr = new FileReader();
            fr.onloadend = (e) => {
                this.setState({
                    imgUrl: e.target.result   //base64
                });

            };
            fr.readAsDataURL(e.target.files[0]);
        }

    }

    render() {
        return (
            <div className="addImgContainer">
                <div>{this.props.title}</div>
                <input className="inputImg" type="file"
                       accept="image/*"
                       onChange={this.getImgUrl}/>
                <div>
                    <img src={this.state.imgUrl} alt=""/>
                </div>
            </div>
        )
    }
}
export default AddImg
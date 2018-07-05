/*** Created by xiaolei on 2018/2/13.*/
import React, {
    Component
} from 'react';
import './EditImgPage.css'
import AddImg from '../../component/AddImg/AddImg'
class EditImgPage extends Component {
    constructor(props){
        super(props);
        this.state={
            imgDefaultUrl: "./img/addPic1.png"
        }
    }
    render() {
        return (
            <div className="AddImgPage">
                <AddImg title="Profile"/>
                <div>
                    <span>Location</span>
                    <input type="text"/>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </div>

        )
    }
}
export default EditImgPage
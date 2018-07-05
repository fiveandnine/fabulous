/**
 * Created by xiaolei on 2018/2/28.
 */
import React, {Component} from 'react';
import './progressbar.css'
class Progressbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lengthStyle: {
                width: this.props.progress
            }
        }
    }

    // setWidth=(dom)=>{
    //     console.log(dom.style);
    // }
    componentWillMount() {
        console.log(this.props.progress)
    }

    render() {
        return (
            <div className="progressContain">
                <div style={this.state.lengthStyle}>
                    <span className="progressTitle">
                        {this.props.title}
                    </span>
                    <div className="fr progressNumContain">
                        <div className="progressNum">
                            {this.props.progress}
                        </div>
                        <div className="progressTriangle"></div>
                    </div>


                </div>
                <div style={this.state.lengthStyle}
                     className="progressBody">
                </div>
                <div className="numButtondiv">
                    <span>0</span>
                    <span className="fr">100</span>
                </div>
            </div>
        )
    }
}
export default Progressbar
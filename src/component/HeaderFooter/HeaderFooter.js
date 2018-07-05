/**
 * Created by xiaolei on 2018/2/13.
 */
import React,{Component} from 'react';
import {hashHistory} from 'react-router'
import './HeaderFooter.css'
class HeaderFooter extends Component{
    constructor(props){
        super(props)
    }
    toOuterUrl=(url)=>{
        window.location.href=url;
    }
    render(){
        return(
            <div>
                <div className="headerContainer">
                    {/*<div  className="headerMenu">Login</div>*/}
                    <div className="portrait">
                        <span>S</span>
                        <span>H</span>
                        <span>A</span>
                        <span>W</span>
                    </div>
                    <h1>FABULOUS</h1>
                </div>
                <div className="childrenContainer">
                    {this.props.children}
                </div>
                <div className="footerContainer">
                    <div>
                        <h2>Code</h2>
                        <div onClick={() => hashHistory.push('note')}>Note</div>
                        <div>GitHub</div>
                    </div>
                    <div>
                        <h2>Photos</h2>
                        <div onClick={()=>{this.toOuterUrl('https://weibo.com/1771493097/profile?rightmod=1&wvr=6&mod=personinfo')}}>Weibo</div>
                        <div onClick={()=>{this.toOuterUrl('https://weibo.com/1771493097/profile?rightmod=1&wvr=6&mod=personinfo')}}>Instagram</div>

                    </div>
                    <div>
                        <h2>Contact</h2>
                        <div><a href="mailto:xiaoleixiaolei2008@yeah.net"> E-mail</a></div>
                    </div>
                    <div>
                        <h2>Review</h2>
                        <div  onClick={() => hashHistory.push('collection?location=storm')}>STORM</div>
                        <div onClick={() => hashHistory.push('collection?location=ultra')}>ULTRA</div>
                    </div>
                    <div>
                        <h2>About</h2>
                        <div key="curriculum vitae" onClick={() => hashHistory.push('curriculum-vitae')}>CV</div>
                    </div>

                </div>
            </div>
        )
    }
}
export default HeaderFooter
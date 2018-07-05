import {field} from '../../component/Form'
import React ,{Component}from 'react';
class Input extends Component{
    constructor(props){
        super(props);
    }
    handlerBlur=()=>{
        console.log('handlerBlur')
    }
    handlerChange=()=>{
        console.log('handlerChange')
    }
    render(){
        const {placeholder, name}=this.props;
        return (
            <div className="noteMenuContainer">
                <input placeholder={placeholder} name={name} onBlur={this.handlerBlur} onChange={this.handlerChange}/>
            </div>
        )
    }
}
export default field(Input);
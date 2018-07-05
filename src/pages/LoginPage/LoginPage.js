/**
 * Created by xiaolei on 2018/2/13.
 */
import React, {Component} from 'react';
import './LoginPage.css'

class LoginPage extends Component {
    render() {
        return (
            <div className="loginContainer">

                <div>Username or email address:</div>
                <input type="text"/>


                <div>Password:</div>
                <input type="password"/>

                <div><button className="signInBtn">Sign in</button></div>
            </div>
        )
    }
}
export default LoginPage
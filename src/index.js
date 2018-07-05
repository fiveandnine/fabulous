import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, hashHistory} from 'react-router';
import routes from './routes';
import './index.css';
import ErrorBoundary from './component/ErrorBoundary/ErrorBoundary'
export default class AppRoutes extends Component{
    render(){
        return (
            <ErrorBoundary>
            <Router history={hashHistory} routes={routes} onUpdate={() => window.scrollTo(0, 0)}/>
            </ErrorBoundary>
        )
    }
}


ReactDOM.render(
    <AppRoutes/>, document.getElementById('root'));

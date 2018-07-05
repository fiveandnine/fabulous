import React from 'react';
import {Route, IndexRoute} from 'react-router';
import HomePage from './pages/home/homePage';
import HeaderFooter from './component/HeaderFooter/HeaderFooter';
import LoginPage from './pages/LoginPage/LoginPage';
import CollectionPage from './pages/CollectionPage/CollectionPage';
import NotePage from './pages/NotePage/NotePage';
import NoteIndex from './pages/NoteIndex/NoteIndex';
import CV from './pages/CV/CV';
import EditNotePage from './pages/EditNotePage/EditNotePage'
import EditImgPage from './pages/EditImgPage/EditImgPage'

import  EditCV from './pages/EditCV/EditCV'
const routes = (
    <Route>
        <Route path="/" component={HeaderFooter}>
            <IndexRoute component={HomePage}/>
            <Route path="login" component={LoginPage}/>
            <Route path="collection"
                   component={CollectionPage}/>
            <Route path="/edit-note" component={EditNotePage}/>
            <Route path="/edit-img" component={EditImgPage}/>
            <Route path="/edit-curriculum-vitae" component={EditCV}/>
        </Route>
        <Route>
            <Route path="note" component={NotePage}/>
            <Route path="noteIndex" component={NoteIndex}/>
            <Route path="curriculum-vitae" component={CV}/>
        </Route>
    </Route>
)
export default routes
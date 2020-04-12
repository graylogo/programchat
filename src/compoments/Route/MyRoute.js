import React from "react";
import {Route,Switch} from "react-router-dom"
import MainContent from "../MainContent/MainContent";
import LoginPage from "../LoginButton/LoginPage";
import SignUp from "../LoginButton/SignUp";
import HotTopic from "../HotTopic/HotTopic";
import Followed from "../Followed/Followed";
import AdminPage from "../Admin/Admin";
import NotFound404 from "../NotFound/NotFound404";
const MyRoute =(props)=>{
    return(
        <Switch>
            <Route exact path="/" component={MainContent}/>
            <Route path="/tab" component={MainContent}/>
            <Route path="/topic/:id" component={MainContent}/>
            <Route path="/user/:id" component={MainContent}/>
            <Route path="/create" component={MainContent}/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/sign_up" component={SignUp}/>
            <Route path="/hot_topic" component={HotTopic}/>
            <Route path="/followed" component={Followed}/>
            <Route path="/admin" component={AdminPage}/>
            <Route component={NotFound404}/>
        </Switch>

    )
};
export default MyRoute;

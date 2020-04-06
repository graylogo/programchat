import React from "react";
import {Route,Switch} from "react-router-dom"
import MainContent from "../MainContent/MainContent";
import LoginPage from "../LoginButton/LoginPage";
import SignUp from "../LoginButton/SignUp";
import HotTopic from "../HotTopic/HotTopic";
import Followed from "../Followed/Followed";
import AdminPage from "../Admin/Admin";
const MyRoute =(props)=>{
    return(
        <Switch>
            <Route exact path="/" component={MainContent}/>
            <Route path="/tab" component={MainContent}/>
            <Route path="/topic/:id" component={MainContent}/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/sign_up" component={SignUp}/>
            <Route path="/hot_topic" component={HotTopic}/>
            <Route path="/followed" component={Followed}/>
            <Route path="/admin" component={AdminPage}/>
        </Switch>

    )
};
export default MyRoute;

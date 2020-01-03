import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from "../components/boggleComponent/Index";
import GameWrapper from "../components/boggleComponent/GameWrapper";

export default (
    <Router>
        <Switch>
            <Route path="/" exact component={Index}/>
            <Route path="/boggle" exact component={Index}/>
            <Route path="/boggle/play" exact component={GameWrapper}/>
        </Switch>
    </Router>
);
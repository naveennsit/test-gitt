import React,{useContext} from 'react';
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import Home from "./home";
import {Dimmer, Loader} from "semantic-ui-react";
import {ConfigContext} from './index'
import AddAgency from "./add-agency";
import AgencyList from "./agency-list";
import AddUser from "./add-user";
import NavigationContainer from "./navigation-container";
import LoadingContext from "./context/loading.context";

const Router = () => {
    return (
        <div>
            <Switch>
                <Route path="/app-list"  component={Home} />
                <Route path="/dth"  component={NavigationContainer} />
                {/*<Route path="/dth"  component={NavigationContainer} />*/}
                {/*<Route path="/edit-agency" exact component={AddAgency} />*/}
                {/*<Route path="/add-user" exact component={AddUser} />*/}
            </Switch>
        </div>
    );
};

export default Router;

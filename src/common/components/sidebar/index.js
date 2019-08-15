import React from 'react';
import {Route, Redirect, Switch, withRouter, NavLink} from "react-router-dom";
import {Menu, Segment, Sidebar} from 'semantic-ui-react'
import AddAgency from "../../../add-agency";
import './index.css';
import {MENU_OPTION} from "../../../constant";
import Home from "../../../home";
import AddUser from "../../../add-user";
import AgencyList from "../../../agency-list";
import UserList from "../../../user-list";

const SidebarNavigation = ({showSideBar,toggleSideBar,match}) => {
    console.log(match)
    const renderMenuItems = () => {
        return MENU_OPTION['DTH']['Business Head'].map((item,index) => {
            return (
                <Menu.Item as={NavLink} exact
                           activeClassName="active"
                           to={item.link}
                           onClick={()=>{
                               toggleSideBar()
                           }}
                           key={item.key}>
                    {item.title}
                </Menu.Item>
            )
        })
    }
    return (
        <div className="sidebar-nav">
            <Sidebar.Pushable as={Segment}>
                <Sidebar
                    as={Menu}
                    animation='overlay'
                    icon='labeled'
                    inverted
                    vertical
                    visible={showSideBar}
                    width='thin'
                >
                    {renderMenuItems()}
                </Sidebar>

                <Sidebar.Pusher className="sideBar-pusher"
                                style={{height: "100%",minHeight:'100vh'}}
                                onClick={() => showSideBar ? toggleSideBar() : null}
                >
                    <Switch>
                        {/*<Route path={"/app-list"}  exact component={Home} />*/}
                        <Route path={"/dth/add-agency"}  exact component={AddAgency}/>
                        <Route path={match.url +"/agency-list"}  exact component={AgencyList}/>
                        <Redirect to="/"/>
                    </Switch>
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        </div>
    );
};

export default withRouter(SidebarNavigation);

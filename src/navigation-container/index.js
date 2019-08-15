import React, {useReducer} from 'react';
import SidebarNavigation from "../common/components/sidebar";
import AppHeader from "../common/components/header";

const NavigationContainer = () => {
    const [state, setState] = useReducer((state, newState) => ({...state, ...newState}), {toggleSideBar: false})
    const toggleSideBar = () => {
        setState({
            toggleSideBar: !state.toggleSideBar
    })
    };
    return (
        <div>
            <AppHeader toggleSideBar={toggleSideBar}/>
            <SidebarNavigation showSideBar={state.toggleSideBar} toggleSideBar={toggleSideBar}/>
        </div>
    );
};

export default NavigationContainer;

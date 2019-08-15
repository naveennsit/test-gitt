import React, {Fragment, useReducer} from 'react';
import ReactTable from "react-table";
import {Button, Icon} from 'semantic-ui-react'

import AppHeader from "../common/components/header";
import SubHeader from "../common/components/sub-header";
import {Container} from "../common/components/util-component";
import TitleText from "../common/components/title";
import DeleteModal from "../common/components/delete-modal";

const AgencyList = (props) => {

    const addAgency = () => {
        props.history.replace({
            pathname: '/dth/add-agency'
        });
    };
    return (
        <Fragment>
                <button onClick={()=>addAgency()}> click 11</button>
        </Fragment>

    );
};

export default AgencyList;

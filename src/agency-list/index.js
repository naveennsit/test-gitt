import React, {Fragment, useReducer} from 'react';


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

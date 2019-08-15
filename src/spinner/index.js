import React ,{useContext} from 'react';
import {Dimmer, Loader} from "semantic-ui-react";
import LoadingContext from "../context/loading.context";

const Spinner = () => {
    const { loadingCount } = useContext(LoadingContext)

    return (
        <div>

            <Dimmer active={loadingCount > 0? true :false}><Loader active={loadingCount > 0? true :false}>Loading...</Loader></Dimmer>

        </div>
    );
};

export default Spinner;

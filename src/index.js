import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

import "semantic-ui-css/semantic.min.css";
import 'react-table/react-table.css'

import styled from 'styled-components';

import '@atlaskit/css-reset';
import AddAgency from "./add-agency";
import AddUser from "./add-user";
import Home from "./home";
import Router from "./router";
import LoadingProvider from "./providers/loading.providers";

export const ConfigContext = React.createContext({});
const configValue = {
    showLoader: false
}
ReactDOM.render(
    <BrowserRouter>
        <LoadingProvider>
            <Router/>
        </LoadingProvider>
    </BrowserRouter>

    , document.getElementById('root'));



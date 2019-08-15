import React, {Fragment,useCallback} from 'react';
import AppHeader from "../common/components/header";
import SubHeader from "../common/components/sub-header";
import {Container, DangerButton, SaveButton} from "../common/components/util-component";
import TitleText from "../common/components/title";
import {Field as RFField, Form as RFFORM} from "react-final-form";
import {Form as SForm} from "semantic-ui-react";
import {SingleSelectAutoComplete, TextField} from "../common";
import {composeValidators, FieldPrefix, getAppImage, required} from "../utils";
import AppWithIcon from "../common/components/app-with-icon";
import logoImage from "../assets/image/dth.png";

const Home =(props) => {

   const clickAppLink = ()=>{
       props.history.push('/dth/agency-list');
   }


    return (
        <Fragment>

           <button onClick={()=>clickAppLink()}>click</button>
        </Fragment>
    );
};

export default Home;

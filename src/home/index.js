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
    const user = {
        name: 'test',
        apps: [{
            name: 'DTH'
        }
        ]
    };
   const clickAppLink = ()=>{
       props.history.push('/dth/agency-list');
   }
    const showAppList = useCallback(()=>{
       return  user.apps.map((i)=>{
            return (
                <AppWithIcon key={i.name} title={i.name} src={getAppImage(i.name)} onclick={clickAppLink}/>
            )
        })
    },[]);

    return (
        <Fragment>
            <AppHeader showMenuOption={true}/>
            <SubHeader title="My Apps"/>
            <Container>
                <TitleText text={'My Apps'}/>
                {showAppList()}
            </Container>
        </Fragment>
    );
};

export default Home;

import React, {Fragment, useState, useContext} from 'react';
import AppHeader from "../common/components/header";
import SubHeader from "../common/components/sub-header";
import TitleText from "../common/components/title";
import {Button, Container, DangerButton, SaveButton} from "../common/components/util-component";
import {Form as RFFORM, Field as RFField} from "react-final-form";
import {Form as SForm, Input} from "semantic-ui-react";

import {composeValidators, FieldPrefix, mailVerified, PrefixedField, renderRadio, required} from "../utils";
import {TextField} from "../common";
import LoadingContext from "../context/loading.context";

const AddAgency = ({location, history}) => {
    const {showLoading, hideLoading} = useContext(LoadingContext);

    const {state} = location;
    let initialState = {};
    if (state) {
        const {name, contactMobile, contactPerson} = state.data;
        initialState = {
            agencyName: name,
            contactMobile: contactMobile,
            contactPerson: contactPerson,
        }
    }
    const onSubmit = async values => {
        console.log('****************submitting request*************')
        console.log(JSON.stringify(values, 0, 2));
        try {
            showLoading();
            setTimeout(()=>{
                hideLoading();
            },1000)
          //  const response = await sendPostRequest('', values);
           // hideLoading();

        } catch (e) {
            hideLoading();
        }


    }
    return (
        <Fragment>


            <Container>
                <RFFORM
                    onSubmit={onSubmit}
                    initialValues={initialState}
                    validate={(values) => {


                    }}
                    render={({handleSubmit, form, submitting, pristine, values, invalid}) => (
                        <SForm onSubmit={handleSubmit} size={"small"}>
                            <SForm.Group inline className="btn--grp">
                                <SaveButton type='submit' disabled={invalid}>{state ? 'Update' : 'Save'}</SaveButton>

                                <DangerButton onClick={() => {
                                    history.replace({
                                        pathname: '/dth/agency-list'
                                    });
                                }}>Cancel</DangerButton>
                            </SForm.Group>
                            <SForm.Group widths="equal">
                                <RFField
                                    component={TextField}
                                    label=" Name"
                                    name="name"
                                    placeholder="Please Enter full Name"
                                    required={true}
                                    validate={composeValidators(required)}>
                                </RFField>

                            </SForm.Group>

                            <br/>
                            <br/>
                            <pre>{JSON.stringify(values, 0, 2)}</pre>
                            ddd{invalid}
                            <pre>{JSON.stringify(invalid, 0, 2)}</pre>
                        </SForm>

                    )}
                />

            </Container>

        </Fragment>

    );
};

export default AddAgency;

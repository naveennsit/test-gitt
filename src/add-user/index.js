import React, {Fragment,useState} from 'react';
import AppHeader from "../common/components/header";
import SubHeader from "../common/components/sub-header";
import {Container, DangerButton, SaveButton} from "../common/components/util-component";
import TitleText from "../common/components/title";
import {Field as RFField, Form as RFFORM} from "react-final-form";
import {Form as SForm} from "semantic-ui-react";
import {SingleSelectAutoComplete, TextField} from "../common";
import {composeValidators, FieldPrefix, mailVerified, PrefixedField, required} from "../utils";
import AppWithIcon from "../common/components/app-with-icon";
import logoImage from "../assets/image/dth.png";
import TextArea from "../common/components/textarea";
const d = [
    {key: "af", value: 'app1', text: "Afghanistan" },
    {key: "ax", value: "ax", text: "Aland Islands"},
    {key: "al", value: "al", text: "Albania"},
    {key: "dz", value: "dz", text: "Algeria"},
    {key: "as", value: "as", text: "American Samoa"},
    {key: "ad", value: "ad", text: "Andorra"},
    {key: "ao", value: "ao", text: "Angola"},
    {key: "ai", value: "ai", text: "Anguilla"},
    {key: "ag", value: "ag", text: "Antigua"},
    {key: "ar", value: "ar", text: "Argentina"},
    {key: "am", value: "am", text: "Armenia"},
    {key: "aw", value: "aw", text: "Aruba"},
    {key: "au", value: "au", text: "Australia"},
    {key: "at", value: "at", text: "Austria"},
    {key: "az", value: "az", text: "Azerbaijan"},
    {key: "bs", value: "bs", text: "Bahamas"},
    {key: "bh", value: "bh", text: "Bahrain"},
    {key: "bd", value: "bd", text: "Bangladesh"},
    {key: "bb", value: "bb", text: "Barbados"},
    {key: "by", value: "by", text: "Belarus"},
    {key: "be", value: "be", text: "Belgium"},
    {key: "bz", value: "bz", text: "Belize"},
    {key: "bj", value: "bj", text: "Benin"}
];
const AddUser = (props) => {
    const [data , setData] =useState([]);
    const onSubmit = async values => {
        window.alert(JSON.stringify(values, 0, 2))
    }
    const onSearchChange = (event) => {
        console.log(event.target.value);
        //setText(event.target.value)
        let updatedData = d.filter((i)=> i.text.toLowerCase().indexOf(event.target.value) !== -1);
        // console.log(updatedData);
        // console.log(updatedData.length);
        console.log(updatedData.slice(0,10))
        setData(updatedData.slice(0,10));
    }
    return (
        <Fragment>
            <SubHeader/>
            <Container>
                <TitleText text={'Add User'}/>
                <RFFORM
                    onSubmit={onSubmit}
                    initialValues={{
                    }}
                    validate={(values) => {
                        const errors = {};
                        if (!values.serviceType) {
                            errors.serviceType = "Required";
                        }
                        return errors;
                    }}
                    render={({handleSubmit, form, submitting, pristine, values}) => (
                        <SForm onSubmit={handleSubmit} size={"small"}>
                            <SForm.Group inline>
                                <SaveButton>Save</SaveButton>
                                <DangerButton onClick={() => {
                                }}>Delete</DangerButton>
                                <DangerButton onClick={() => {
                                }}>Edit</DangerButton>
                            </SForm.Group>
                            <SForm.Group widths="equal">
                                <RFField
                                    component={TextField}
                                    label="Name"
                                    name="name"
                                    placeholder="Please Enter full Name"
                                    required={true}
                                    validate={composeValidators(required)}>
                                </RFField>
                                <RFField
                                    component={TextField}
                                    label="Mobile (User ID)"
                                    name="mobileNo"
                                    placeholder=""
                                    required={true}
                                    validate={required}
                                />
                            </SForm.Group>

                            <SForm.Group widths="equal">
                                <RFField
                                    component={TextField}
                                    label="Email"
                                    name="email"
                                    placeholder="optional but recommended"
                                />
                                <RFField
                                    component={TextField}
                                    label="Email"
                                    name="email"
                                    placeholder=""
                                />
                            </SForm.Group>
                            <SForm.Group widths="equal">
                                <RFField
                                    component={SingleSelectAutoComplete}
                                    label="Organisation"
                                    name="organisation"
                                    placeholder=""
                                    required={true}
                                    validate={required}
                                    data={data}
                                    onSearchChange={onSearchChange}
                                />
                                <RFField
                                    component={TextField}
                                    label="OLM ID (can be used to login)"
                                    name="olmId"
                                    placeholder="Mandatory"
                                    required={values.organisation === 'app1'}
                                />
                            </SForm.Group>
                            <pre>{JSON.stringify(values, 0, 2)}</pre>

                        </SForm>

                    )}
                />
            </Container>

        </Fragment>
    );
};

export default AddUser;

import React, {Fragment, useState, useContext} from 'react';
import AppHeader from "../common/components/header";
import SubHeader from "../common/components/sub-header";
import TitleText from "../common/components/title";
import {Button, Container, DangerButton, SaveButton} from "../common/components/util-component";
import {Form as RFFORM, Field as RFField} from "react-final-form";
import {Form as SForm, Input} from "semantic-ui-react";
import TextArea from "../common/components/textarea";
import AppWithIcon from "../common/components/app-with-icon";
import logoImage from '../assets/image/dth.png';
import {composeValidators, FieldPrefix, mailVerified, PrefixedField, renderRadio, required} from "../utils";
import {TextField} from "../common";
import {sendPostRequest} from "../constant";
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

            <SubHeader/>
            <Container>
                <TitleText text={state ? 'Edit Agency' : 'Add Agency'}/>
                <button onClick={()=>{showLoading(); setTimeout(()=>hideLoading(),2000)}}>rrr</button>
                <RFFORM
                    onSubmit={onSubmit}
                    initialValues={initialState}
                    validate={(values) => {
                        const errors = {
                            dth: {}
                        };
                        if (values.dth && !values.dth.serviceType) {
                            errors.dth.serviceType = "Required";
                        }
                        console.log(JSON.stringify(errors))
                        return errors;
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
                                    label="Agency Name"
                                    name="agencyName"
                                    placeholder="Please Enter full Name"
                                    required={true}
                                    validate={composeValidators(required)}>
                                </RFField>
                                <RFField
                                    component={TextField}
                                    label="Contact Person"
                                    name="contactPerson"
                                    placeholder=""
                                    required={true}
                                    validate={required}
                                />
                            </SForm.Group>

                            <SForm.Group widths="equal">
                                <RFField
                                    component={TextField}
                                    label="Contact Mobile"
                                    name="contactMobile"
                                    placeholder="Please Enter contact mobile"
                                    required={true}
                                    onChange={(v) => {
                                        console.log('====')
                                    }}
                                    validate={required}
                                    type={'number'}
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
                                    component={TextField}
                                    label="Address"
                                    name="address"
                                    placeholder=""
                                    required={true}
                                    validate={required}
                                />
                            </SForm.Group>
                            <SForm.Group widths="equal">
                                <RFField
                                    component={TextField}
                                    label="Mobility Sales Channel ID"
                                    name="mobilitySalesChannelID"
                                    placeholder="Not required for DTH"
                                />
                                <RFField
                                    component={TextField}
                                    label="Telemedia Sales Channel ID"
                                    name="telemediaSaleChannelId"
                                    placeholder="Required for PACE ONLY"
                                />
                            </SForm.Group>
                            <SForm.Group widths="equal">
                                <RFField
                                    component={TextField}
                                    label="Vendor Code"
                                    name="vendorCode"
                                    placeholder="Required for PACE ONLY"
                                />
                                <RFField
                                    component={TextField}
                                    label="Channel Partner ID"
                                    name="channelPartnerId"
                                    placeholder=""
                                    format={(v) => v}
                                    formatOnBlur
                                />
                            </SForm.Group>


                            <TitleText text={'Location Mapping'}/>
                            <FieldPrefix prefix="dth">
                                <AppWithIcon title={'DTH Installation and Service'} src={logoImage}/>
                                <SForm.Group widths="equal">
                                    <PrefixedField
                                        component={TextArea}
                                        name="operatingPinCode"
                                        placeholder="Operating Pincodes"
                                        label="Operating Pincodes"
                                        useCacheForDOMMeasurements
                                        validate={required}
                                        required={true}
                                        format={(v) => {
                                            if (v) {
                                                let codes = v.split(',');
                                                let newCodes = codes.filter((i) => i.length === 6);
                                                return newCodes.sort().join(',')
                                            }
                                            return ''
                                        }}
                                        formatOnBlur
                                    />
                                </SForm.Group>
                                <div className="mr-top10">
                                    <SForm.Group>
                                        <div
                                            className={`field required ${values && values.dth && !values.dth.serviceType ? "error" : null}`}>
                                            <label>Service Type</label>
                                        </div>
                                        <PrefixedField
                                            component={renderRadio}
                                            label="SDU"
                                            name="serviceType"
                                            radioValue={"SDU"}
                                            error={values && values.dth && !values.dth.serviceType ? true : false}

                                        />
                                        <PrefixedField
                                            component={renderRadio}
                                            label="MDU"
                                            name="serviceType"
                                            radioValue={"MDU"}
                                            error={values && values.dth && !values.dth.serviceType ? true : false}
                                        />
                                        <PrefixedField
                                            component={renderRadio}
                                            label="Both"
                                            name="serviceType"
                                            error={values && values.dth && !values.dth.serviceType ? true : false}
                                        />

                                    </SForm.Group>
                                </div>
                            </FieldPrefix>
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

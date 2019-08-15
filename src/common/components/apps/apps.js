import React from 'react';
import {Field as RFField} from "react-final-form";
import {Form as SForm} from "semantic-ui-react";
import {FieldPrefix, PrefixedField} from "../../../utils";


const Apps = ({values}) => {

    const handleAppsField = () => {
        if (values.app1 && values.app1.city) {
            values.app1.city = ""
        }

        if (values.app1 && values.app1.state) {
            values.app1.state = ""
        }

        return null

    };
    const handleAppsField1 = ()=>{
       // alert('--')
        if (values.app1 && values.app1) {
            values.app1 = {}
        }
    }
    return (
        <div>
            {values && values.dropdown && values.dropdown.length > 0 && values.dropdown[0].indexOf('app1') != -1 ?
                <div>

                    <FieldPrefix prefix="app1">
                        <div>
                            <label>app1
                                <PrefixedField
                                    name="appStatus"
                                    component="input"
                                    type="checkbox"
                                    onClick={()=>handleAppsField()}
                                />
                            </label>
                        </div>
                        {values.app1 && values.app1.appStatus ?
                            <div>
                                <label>City</label>
                                <PrefixedField
                                    name="city"
                                    component="input"
                                    type="text"
                                    placeholder="City"
                                />

                                <label>state</label>
                                <PrefixedField
                                    name="state"
                                    component="input"
                                    type="text"
                                    placeholder="state"
                                />
                            </div> : handleAppsField() }
                    </FieldPrefix>

                </div> :  handleAppsField1()
            }
        </div>
    );
};

export default Apps;

import React from 'react';
import {Form, Field} from "react-final-form";
import {Form as SForm} from "semantic-ui-react";

export const APP_MAPPING = [
    { key: "DTH", asset: require("./assets/image/dth.png") }
];
export function getAppImage(id) {
    const arr = APP_MAPPING.filter(obj => obj.key === id)
    return arr.length > 0 ? arr[0].asset: null;
}

export const required = value => (value ? undefined : "Required");
export const mailVerified = value => (value.indexOf('@')!=-1 ? undefined : "Mail");
export const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined);

export const FieldPrefixContext = React.createContext();
export const FieldPrefix = ({prefix, children}) => (
    <FieldPrefixContext.Provider value={prefix}>
        {children}
    </FieldPrefixContext.Provider>
);
export const PrefixedField = ({name, ...props}) => (
    <FieldPrefixContext.Consumer>
        {prefix => <Field name={`${prefix}.${name}`} {...props} />}
    </FieldPrefixContext.Consumer>
);

export const renderRadio = field => (
       <SForm.Radio
           checked={field.input.value === field.radioValue}
           label={field.label}
           required={field.required}
           error={field.error}
           name={field.input.name}
           onChange={(e, {checked}) => field.input.onChange(field.radioValue)}
       />
);

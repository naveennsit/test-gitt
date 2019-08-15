import React ,{useEffect,useState}from 'react';
import {Form as RFFORM, Field as RFField} from "react-final-form";
import {Form as SForm} from "semantic-ui-react";
import {TextRFField, SingleSelectAutoComplete} from "./common";
import Apps from "./common/components/apps/apps";



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

const required = value => (value ? undefined : "Required");
const mustBeNumber = value => (isNaN(value) ? "Must be a number" : undefined);
const minValue = min => value =>
    isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`;
const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined);

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
    await sleep(300)
    window.alert(JSON.stringify(values, 0, 2))
}


const renderCheckbox = field => (
    <SForm.Checkbox
        checked={!!field.input.value}
        name={field.input.name}
        label={field.label}
        onChange={(e, {checked}) => field.input.onChange(checked)}
    />
);

const renderRadio = field => (
    <SForm.Radio
        checked={field.input.value === field.radioValue}
        label={field.label}
        name={field.input.name}
        onChange={(e, {checked}) => field.input.onChange(field.radioValue)}
    />
);

const renderSelect = field => (
    <SForm.Select
        label={field.label}
        name={field.input.name}
        onChange={(e, {value}) => field.input.onChange(value)}
        options={field.options}
        placeholder={field.placeholder}
        value={field.input.value}
    />
);

const renderTextArea = field => (
    <SForm.TextArea
        {...field.input}
        label={field.label}
        placeholder={field.placeholder}
    />
);

const Condition = ({when, is, children}) => (
    <RFField name={when} subscription={{value: true}}>
        {({input: {value}}) => (value === is ? children : null)}
    </RFField>
)


function App() {
    const  [text , setText]=useState('')
    const  [data , setData]=useState([])
    useEffect(() => {
        if(text) {
            var promise1 = new Promise(function (resolve, reject) {
                setTimeout(function () {
                    console.log('==ddd====')
                    resolve(d);
                }, 300);
            });

            promise1.then(function (value) {
                console.log('======',value)
                setData(value);
                // expected output: "foo"
            });
        }
    },[text]);

    const onSearchChange = (event) => {
        console.log(event.target.value);
        setText(event.target.value)
    }

    return (
        <div style={{width: 600, margin: '0 auto'}}>
            <RFFORM
                onSubmit={onSubmit}
                initialValues={{
                    dropdown: [],
                }}
                render={({handleSubmit, form, submitting, pristine, values}) => (
                    <SForm onSubmit={handleSubmit}>
                        <SForm.Group widths="equal">
                            <RFField
                                component={SForm.Input}
                                label="First name"
                                name="firstName"
                                placeholder="First name"
                            />
                            <RFField
                                component={SForm.Input}
                                label="Last name"
                                name="lastName"
                                placeholder="Last name"
                            />
                            <RFField
                                component={renderSelect}
                                label="Gender"
                                name="gender"
                                options={[
                                    {key: "m", text: "Male", value: "male"},
                                    {key: "f", text: "Female", value: "female"}
                                ]}
                                placeholder="Gender"
                            />
                        </SForm.Group>

                        <SForm.Group inline>
                            <label>Quantity</label>

                            <RFField
                                component={renderRadio}
                                label="One"
                                name="quantity"
                                radioValue={1}
                            />
                            <RFField
                                component={renderRadio}
                                label="Two"
                                name="quantity"
                                radioValue={2}
                            />
                            <RFField
                                component={renderRadio}
                                label="Three"
                                name="quantity"
                                radioValue={3}
                            />
                        </SForm.Group>

                        <RFField
                            component={renderTextArea}
                            label="About"
                            name="about"
                            placeholder="Tell us more about you..."
                        />

                        <RFField
                            component={SingleSelectAutoComplete}
                            label="I agree to the Terms and Conditions"
                            name="dropdown"
                            data={data}
                            onSearchChange={onSearchChange}
                        />

                        <Apps values={values}/>

                        <SForm.Group inline>
                            <SForm.Button primary>Submit</SForm.Button>
                            <SForm.Button onClick={() => {
                            }}>Reset</SForm.Button>
                        </SForm.Group>
                        <pre>{JSON.stringify(values, 0, 2)}</pre>

                    </SForm>

                )}
            />
        </div>
    );
}

export default App;

import React, {useState,useEffect} from "react";
import {Dropdown, Form} from "semantic-ui-react";

const SingleSelectAutoComplete = (props) => {

    const { input,label,onSearchChange,data,meta,required} = props;

    console.log(props,'props')
    return (
        <div className={`field ${(meta.error && meta.touched)?' error':''} ${(required)?' required':''}`}>
            <label>{label}</label>
            <Dropdown
                {...props.input}
                clearable
                fluid


                search
                closeOnChange

                onChange={(e, data) => {
                   //  if (data.value && data.value.length > 1) {
                   //      data.value.shift();
                   // }
                  return   input.onChange(data.value)
                }}
                onSearchChange={onSearchChange}
                selection
                options={data}
                defaultValue={[]} //
                placeholder="Select Country"
            />
        </div>
    );
};

export default SingleSelectAutoComplete;

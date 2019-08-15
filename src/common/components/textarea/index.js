import React, {Fragment} from 'react';
import TextareaAutosize from "react-textarea-autosize";
import {Error} from  '../util-component'
const TextArea = (props) => {
    const {required, input, meta, label} = props;
    const id = input.name;
    const renderError = ({ error, touched }, id) => {
        if (touched && error) {
            return <Error id={id}>{error}</Error>;
        }
    };

            return (
        <div className={`field ${(required) ? ' required' : ''} ${(meta.error && meta.touched) ? ' error' : ''}`}>
            <label>{label}</label>
            <TextareaAutosize
                name={input.name}
                value={input.value}
                onChange={input.onChange}
                onBlur={input.onBlur}
            />
            {renderError(meta, `${id}-error-text`)}
        </div>
    );
};

export default TextArea;

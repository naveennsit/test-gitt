
import React from 'react';
import styled from "styled-components";
import {Error} from '../util-component'
const TextField = React.memo(props => {

	const { input, label, meta, readOnly ,required,placeholder} = props;
	const id = input.name;

	const renderLabel = label => {
		return (
			<span>
				<span>{label.text}</span>
				{label.mandatory ? <span>&nbsp;*</span> : null}
			</span>
		);
	};

	const renderError = ({ error, touched }, id) => {
		if (touched && error) {
			return <Error id={id}>{error}</Error>;
		}
	};

	return (

	<div className={`field ${(meta.error && meta.touched)?' error':''} ${(required)?' required':''}`} style={{height:'75px'}}>
		<label >{label}</label>
		<div className="ui fluid input">
			<input type="text"
				   {...input}
				   placeholder={placeholder}
				   autoComplete="off"/>

		</div>
		{renderError(meta, `${id}-error-text`)}
	</div>
	);
});

export default TextField;

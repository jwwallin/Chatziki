import React from 'react';
import { Field, reduxForm } from 'redux-form';

let InputField = ({ name, onSubmit, submitLabel }) => (
  <form onSubmit={onSubmit}>
    <Field name={name} component='input' type='text' />
    <button type='submit'>{submitLabel}</button>
  </form>
);

InputField = reduxForm({ form: "inputField" })(InputField);

export default InputField;
import React from 'react';
import { shape, any, oneOfType, bool } from 'prop-types';
import { Field } from 'formik';
import { Input, Label, FieldError } from '../index';

function MyTextInput({ field, form, showLabel, ...rest }) {
  return (
    <div>
      <Label showLabel={showLabel} name={field.name} label={rest.label} />
      <Input {...field} {...rest} id={field.name} />
      <FieldError name={field.name} />
    </div>
  );
}

MyTextInput.propTypes = {
  field: oneOfType([shape(any), any]).isRequired,
  form: oneOfType([shape(any), any]).isRequired,
  showLabel: bool
};

MyTextInput.defaultProps = {
  showLabel: true
};

export default function Textinput(props) {
  return <Field component={MyTextInput} {...props} />;
}

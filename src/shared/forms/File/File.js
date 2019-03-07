import React from 'react';
import { shape, any } from 'prop-types';
import { Field } from 'formik';

const FileInput = ({ field, form, ...rest }) => <input {...field} {...rest} />;

FileInput.propTypes = {
  field: shape(any).isRequired,
  form: shape(any).isRequired
};

// Formik radio input wrapper.
const FormikRadio = props => <Field type="file" component={FileInput} {...props} />;

export default FormikRadio;

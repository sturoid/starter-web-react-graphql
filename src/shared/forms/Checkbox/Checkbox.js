import React from 'react';
import { Field } from 'formik';
import { Checkbox } from 'antd';

// Ant design checkbox.
// eslint-disable-next-line
const AntCheckbox = ({ field, form, label, ...rest }) => (
  <Checkbox {...field} {...rest}>
    {label}
  </Checkbox>
);

// Formik radio input wrapper.
const FormikCheckbox = props => (
  <Field type="checkbox" component={AntCheckbox} {...props} />
);

export default FormikCheckbox;

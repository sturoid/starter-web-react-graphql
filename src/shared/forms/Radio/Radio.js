import React from 'react';
import { Field } from 'formik';
import { Radio } from 'antd';

// Ant design radio button.
// eslint-disable-next-line
const AntRadio = ({ field, form, label, ...rest }) => {
  return (
    <Radio.Button {...field} {...rest} checked={form.values[field.name] === field.value}>
      {label}
    </Radio.Button>
  );
};

// Formik radio input wrapper.
export default function FormikRadio(props) {
  return <Field type="radio" component={AntRadio} {...props} />;
}

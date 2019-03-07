import React from 'react';
import { string } from 'prop-types';
import styled from '@emotion/styled';
import { ErrorMessage } from 'formik';

const ErrorDiv = styled.div`
  color: ${props => props.theme.error};
  text-align: left;
`;

export default function FieldError({ name }) {
  return <ErrorMessage name={name}>{msg => <ErrorDiv>{msg}</ErrorDiv>}</ErrorMessage>;
}

FieldError.propTypes = {
  name: string
};

FieldError.defaultProps = {
  name: ''
};

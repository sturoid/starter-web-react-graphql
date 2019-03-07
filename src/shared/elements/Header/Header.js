import React from 'react';
import { Divider } from 'antd';
import { childrenType, stylesType } from '~/lib/prop-types';

const defaultStyle = {
  fontSize: '4rem',
  lineHeight: '5rem',
  margin: 0
};

const MyHeader = ({ children, style, ...rest }) => (
  <Divider orientation="left" style={{ margin: '0 0 3rem 0' }}>
    <h1 style={{ ...defaultStyle, ...style }} {...rest}>
      {children}
    </h1>
  </Divider>
);

MyHeader.defaultProps = {
  style: {}
};

MyHeader.propTypes = {
  children: childrenType.isRequired,
  style: stylesType
};

export default MyHeader;

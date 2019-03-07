import React from 'react';
import { Button } from 'antd';
import { childrenType, stylesType, stringType } from '~/lib/prop-types';

const MyButton = ({ children, style, ...rest }) => {
  const defaultStyle = {};

  return (
    <Button style={{ ...defaultStyle, ...style }} {...rest}>
      {children}
    </Button>
  );
};

MyButton.defaultProps = {
  style: {},
  type: 'default',
  size: 'default'
};

MyButton.propTypes = {
  children: childrenType.isRequired,
  style: stylesType,
  type: stringType,
  size: stringType
};

export default MyButton;

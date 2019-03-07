import React from 'react';
import { string, bool } from 'prop-types';

function humanizeCameCase(str) {
  return (
    str
      // insert a space before all caps
      .replace(/([A-Z])/g, ' $1')
      // uppercase the first character
      .replace(/^./, s => {
        return s.toUpperCase();
      })
  );
}

export default function Label({ showLabel, name, label }) {
  if (!showLabel) return null;
  return (
    <label style={{ textAlign: 'left' }} htmlFor={name}>
      {label || humanizeCameCase(name)}
    </label>
  );
}

Label.propTypes = {
  showLabel: bool,
  label: string,
  name: string
};

Label.defaultProps = {
  showLabel: true,
  label: '',
  name: ''
};

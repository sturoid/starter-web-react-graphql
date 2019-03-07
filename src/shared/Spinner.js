import React from 'react';
import { Spin } from 'antd';

const Spinner = () => (
  <div style={{ height: '100vh', width: '100vw' }}>
    <div style={{ position: 'absolute', top: '50%', left: '50%' }}>
      <Spin size="large" />
    </div>
  </div>
);

export default Spinner;

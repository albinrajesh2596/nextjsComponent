// DynamicInput.jsx
import React from 'react';
import { Input } from 'antd';
import './index.css';

const DynamicInput = (props) => {
  const { className, ...restProps } = props;

  return (
    <Input className={`dynamic-input ${className}`} {...restProps} />
  );
};

export default DynamicInput;

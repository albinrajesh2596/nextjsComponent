// DynamicRangePicker.jsx
import React from 'react';
import { DatePicker } from 'antd';

const DynamicRangePicker = (props) => {
  const { style, ...restProps } = props;

  return (
    <DatePicker.RangePicker
      style={{ ...style, marginRight: '10px' }}
      {...restProps}
    />
  );
};

export default DynamicRangePicker;

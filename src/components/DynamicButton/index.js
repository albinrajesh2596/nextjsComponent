// DynamicButton.jsx
import React from 'react';
import { Button } from 'antd';

const DynamicButton = (props) => {
  return (
    <Button {...props}>
      {props.text}
    </Button>
  );
};

export default DynamicButton;

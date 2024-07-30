import React from 'react';
import { Button } from 'antd';
import styled from 'styled-components';
import axios from 'axios'; 

const StyledButton = styled(Button)`
  &&& {
    width: ${(props) => (props.block ? '100%' : 'auto')};
  }
`;

export const CustomButton = ({ btnValue, style }) => {
  const {
    type = 'default',
    htmlType = 'button',
    size = 'middle',
    loading = false,
    disabled = false,
    icon,
    block = false,
    shape = 'default',
    onClick, 
    postApi,
    children
  } = btnValue;

  const handleClick = async (event) => {
    if (postApi) {
      try {
        const response = await axios.get(postApi);
        console.log(response.data); 
        btnValue.btnData(response.data)
      } catch (error) {
        console.error('Error making API call:', error);
      }
    }
  };

  return (
    <StyledButton
      type={type}
      htmlType={htmlType}
      size={size}
      loading={loading}
      disabled={disabled}
      icon={icon}
      block={block}
      shape={shape}
      onClick={handleClick}
      style={style}
    >
      {children}
    </StyledButton>
  );
};
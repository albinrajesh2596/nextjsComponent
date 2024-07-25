import React from 'react';
import { Button } from 'antd';
import styled from 'styled-components';

// Styled button (optional for custom styling)
const StyledButton = styled(Button)`
  &&& {
    width: ${(props) => (props.block ? '100%' : 'auto')};
  }
`;

const CustomButton = ({
  type = 'default',
  htmlType = 'button',
  size = 'middle',
  loading = false,
  disabled = false,
  icon,
  block = false,
  shape = 'default',
  onClick,
  children,
  style,
}) => (
  <StyledButton
    type={type}
    htmlType={htmlType}
    size={size}
    loading={loading}
    disabled={disabled}
    icon={icon}
    block={block}
    shape={shape}
    onClick={onClick}
    style={style}
  >
    {children}
  </StyledButton>
);

export default CustomButton;

// we can use like this 


// 'use client'
// import React from 'react';
// import { PieCharts } from '@/components/graph/PieChart';
// import Button from '@/components/form/CustomButton';
// import { GrAdd } from 'react-icons/gr';

// export default function Home() {

  // const handleChange = async () => {
  //   try {
  //     const response = await axios.post('/api/endpoint', { data: 'sample data' });
  //     console.log('Response:', response.data);
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  // return (
  //   <main className="flex">
  //     <Button.Primary text="Primary Button" icon={<GrAdd />} onClick={handleChange} />
  //     <Button.Secondary text="Secondary Button" onClick={handleChange} />
  //     <Button.Danger text="Danger Button" onClick={handleChange} />
  //     <Button.Yellow text="Yellow Button" onClick={handleChange} />
  //   </main>
  // );
// }


// import React from 'react';
// import { Button as AntdButton } from 'antd';
// import styled, { css } from 'styled-components';
// import Flex from './CustomFlex';
// import { THEME } from '@/theme';

// // Common border style

// const BorderStyle = css`
//   &:hover {
//     border-color: ${THEME.GREY_T_85};
//   }
//   &:focus {
//     border-color: ${THEME.GREY_T_85};
//   }
// `;

// // Text container with conditional margin
// const TextContainer = styled.div`
//   display: flex;
//   margin-left: ${props => (props.icon ? '7px' : '0')};
// `;

// // Different button styles
// const primaryButtonStyles = css`
//   color: ${THEME.white};
//   background-color: ${THEME.BTN_PRIMARY};
//   &:hover {
//     background-color: ${THEME.BTN_PRIMARY_HOVER};
//   }
// `;

// const secondaryButtonStyles = css`
//   color: ${THEME.white};
//   background-color: ${THEME.BTN_SECONDARY};
//   &:hover {
//     background-color: ${THEME.BTN_SECONDARY_HOVER};
//   }
// `;

// const dangerButtonStyles = css`
//   color: ${THEME.danger_2};
//   border-color: ${THEME.danger_2};
//   &:hover {
//     color: #fff;
//     background-color: ${THEME.danger_2};
//     border-color: ${THEME.danger_2};
//   }
//   &:focus {
//     box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);
//   }
// `;

// const yellowButtonStyles = css`
//   color: ${THEME.white};
//   background-color: ${THEME.dark_gold};
//   border-color: ${THEME.dark_gold};
//   &:hover {
//     background-color: ${THEME.dark_gold};
//   }
// `;

// // Styled button component
// const PlainButton = styled(AntdButton)`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 4px;
//   font-size: 14px;
//   padding: 0px 15px;
//   cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
//   ${props => props.type === 'primary' && primaryButtonStyles};
//   ${props => props.type === 'secondary' && secondaryButtonStyles};
//   ${props => props.type === 'danger' && dangerButtonStyles};
//   ${props => props.type === 'yellow' && yellowButtonStyles};
//   ${BorderStyle}
// `;

// // Different button type components
// const Button = props => <PlainButton {...props} />;

// const Primary = ({ text, icon, ...props }) => (
//   <Button {...props} type="primary">
//     <Flex>
//       {icon}
//       <TextContainer icon={icon}>{text}</TextContainer>
//     </Flex>
//   </Button>
// );

// const Secondary = ({ text, icon, ...props }) => (
//   <Button {...props} type="secondary">
//     <Flex>
//       {icon}
//       <TextContainer icon={icon}>{text}</TextContainer>
//     </Flex>
//   </Button>
// );

// const Danger = ({ text, icon, ...props }) => (
//   <Button {...props} type="danger">
//     <Flex>
//       {icon}
//       <TextContainer icon={icon}>{text}</TextContainer>
//     </Flex>
//   </Button>
// );

// const Yellow = ({ text, icon, ...props }) => (
//   <Button {...props} type="yellow">
//     <Flex>
//       {icon}
//       <TextContainer icon={icon}>{text}</TextContainer>
//     </Flex>
//   </Button>
// );

// Button.Primary = Primary;
// Button.Secondary = Secondary;
// Button.Danger = Danger;
// Button.Yellow = Yellow;

// export default Button;



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

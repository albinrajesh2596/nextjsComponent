import styled from 'styled-components'

const CustomLabel = styled.label`
  position: relative;
  color: #000 !important;
  font-weight: 600;
  font-size: 14px;
  text-transform: capitalize;
  letter-spacing: 0.01em;
  ${props => props.labelStyle || ''}
  ${props =>
        props.required &&
        `&::after {
      content: '';
      border-radius: 50%;
      height: 4px;
      width: 4px;
      position: absolute;
      top: 8px;
      margin-left:5px;
      padding-left:2px;
  }`}
  span {
    font-weight: 400;
  }
  
`
export default CustomLabel

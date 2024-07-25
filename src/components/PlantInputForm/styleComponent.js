
import styled from 'styled-components'
 
const Label = styled.label`
  position: relative;
  color: #707070 !important;
  font-weight: 600;
  font-size: 14px;
  text-transform: capitalize;
  margin-right:5px;
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
      margin-right:5px;
      padding-left:2px;
  }`}
 
  span {
    font-weight: 400;
  }
`
export default Label
 
 
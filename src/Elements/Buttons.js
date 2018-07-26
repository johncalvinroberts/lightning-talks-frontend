import styled from 'styled-components'
import { darkGrey, blue, white, transition } from '@/Utilities'

export const SubmitButton = styled.button`
  ${transition({ length: '0.2s' })}
  box-shadow: 1px 1px 0 ${darkGrey};
  border: 1px solid ${darkGrey};
  padding: 0.2rem;
  text-align: center;
  float: right;
  border-radius: 0.1rem;
  &:hover {
    box-shadow: 2px 2px 0 ${darkGrey};
  }
  &:focus {
    outline: 0 none;
    border-width: 2px;
  }
`
export const ScrollButton = styled(SubmitButton)`
  background-color: ${blue};
  color: ${white};
  font-size: 16px;
  display: block;
  float: unset;
  border-color: ${blue};
  box-shadow: 2px 2px 0 ${darkGrey};
  margin: 0 auto;
  margin-top: 20px;
  &:hover{
    background-color: ${white};    
    color: ${blue};
    box-shadow: 3px 3px 0 ${blue};
  }
`

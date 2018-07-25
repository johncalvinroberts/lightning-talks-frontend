import styled from 'styled-components'
import { darkGrey, transition } from '@/Utilities'

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

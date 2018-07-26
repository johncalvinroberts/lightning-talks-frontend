import styled from 'styled-components'
import { transition, lightGrey, darkGrey, white } from '@/Utilities'

export const Form = styled.form`
  font-size: 13px;
  padding: 0.7rem 0;
  label {
    display: block;
    width: 100%;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  input, textarea {
    width: 100%;
    background-color: ${lightGrey};
    cursor: text;
    border-radius: 0.1rem;
    min-height: 32px;
    border: none;
    margin-bottom: 0.5rem;
    border: solid 2px transparent;
    ${transition({ length: '0.2s' })}
    &:focus {
      background-color: ${white};
      outline: 0 none;
      border-color: ${darkGrey}
    }
  }
  textarea {
    height: 100px;
    resize: none;
  }
`

export const FormTitle = styled.h3`
  margin: 0;
  margin-bottom: 10px;
`

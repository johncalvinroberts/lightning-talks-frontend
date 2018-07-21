import styled from 'styled-components'
import { elevation, transition } from '@/Utilities'

export const Card = styled.div`
  background-color: white;
  border-radius: 2px;
  padding: 15px;
  ${elevation[2]}
  ${transition({ length: '1s' })}
  &:hover {
    ${elevation[3]}
  }
`

import styled from 'styled-components'
import { elevation, transition } from '@/Utilities'

export const Card = styled.div`
  background-color: white;
  border-radius: 2px;
  padding: 15px;
  min-width: 265px;
  ${elevation[2]}
  ${transition({ length: '0.2s' })}
  &:hover {
    ${elevation[3]}
  }
`

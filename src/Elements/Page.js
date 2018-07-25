import styled from 'styled-components'
import { alabaster } from '@/Utilities'

export const Page = styled.div`
  background-color: ${props => props.backgroundColor};
  padding-top: 3rem;
  padding: ${props => props.padding};
  min-height: 100vh;
`
Page.defaultProps = {
  backgroundColor: alabaster,
  padding: '0.3rem'
}

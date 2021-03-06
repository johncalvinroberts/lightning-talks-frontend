import styled from 'styled-components'
import { alabaster } from '@/Utilities'

export const Page = styled.div`
  background-color: ${props => props.backgroundColor};
  padding: ${props => props.padding};
  min-height: 100vh;
`
Page.defaultProps = {
  backgroundColor: alabaster,
  padding: '0.3rem'
}

export const PageInner = styled.div`
    padding-top:75px;
    max-width: 750px;
    margin: 0 auto;
`

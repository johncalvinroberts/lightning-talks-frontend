import styled from 'styled-components'

export const HorizontalFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  padding: ${props => props.padding};
  justify-content: ${props => props.justifyContent}
`
HorizontalFlex.defaultProps = {
  justifyContent: 'space-around',
  padding: '0'
}

export const VerticalFlex = styled.div`
  display: flex;
  width: 100%;
  height: ${props => props.height};
  align-items: center;
  padding: ${props => props.padding};
  flex-wrap: wrap;
`
VerticalFlex.defaultProps = {
  height: '100vh',
  padding: '0'
}

export const absolute = ({ y = 'top', x = 'left' }) => `
  position: absolute;
  ${x}: 0;
  ${y}: 0;
`
export const fixed = ({ y = 'top', x = 'left' }) => `
  position: fixed;
  ${x}: 0;
  ${y}: 0;
`

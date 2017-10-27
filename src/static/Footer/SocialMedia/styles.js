export const iconList = ({ breakpoints, spacing }) => `

  flex-wrap: nowrap;
  @media ${breakpoints.smallOnly} {
    justify-content: center;
    margin-bottom: ${spacing[36]};
  }

  @media ${breakpoints.mediumUp} {
    justify-content: flex-start;
    height: 30px;
  }

`;

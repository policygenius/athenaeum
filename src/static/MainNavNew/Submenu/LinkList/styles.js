export const mainList = ({ breakpoints, spacing }) => `
  padding: ${spacing['24']} !important;

  @media ${breakpoints.tablet} {
    padding: 0 !important;
  }
`;

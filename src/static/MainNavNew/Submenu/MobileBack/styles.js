export const mobileBackWrapper = ({ breakpoints }) => `
  border-bottom: 1px solid #f5f5f5;

  @media ${breakpoints.tablet} {
    display: none;
  }
`;

export const mobileBack = ({ spacing }) => `
  padding: ${spacing['24']};
  align-items: center;
`;

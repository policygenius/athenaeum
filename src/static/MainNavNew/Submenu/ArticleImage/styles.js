export const wrapper = ({ colors, breakpoints, spacing }) => `
  width: 100%;
  padding: ${spacing['24']};
  border-bottom: 1px solid ${colors.neutral6};

  @media ${breakpoints.mediumUp} {
    padding: 0;
    border-bottom: 0;
  }
`;

export const image = () => `
  min-width: 100%;
  max-width: 100%;
  height: auto;
  min-height: 150px;
  margin: auto;
`;

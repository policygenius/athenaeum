export const simpleNav = () => `
  display: flex;
  flex-basis: 100%;
  height: 100%;
  position: static;
`;

export const content = ({ breakpoints, spacing }) => `
  display: none;
  align-items: center;
  justify-content: space-between;
  padding-left: ${spacing['60']};
  width: 100%;

  @media ${breakpoints.mediumUp} {
    display: flex;
  }
`;

export const secondaryTextWrapper = ({ breakpoints }) => `
  display: none;

  @media ${breakpoints.largeUp} {
    display: block;
  }
`;

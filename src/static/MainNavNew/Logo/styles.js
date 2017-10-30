export const logo = ({ breakpoints, spacing }) => `
  @media ${breakpoints.smallOnly} {
    left: ${spacing['24']};
    position: absolute;
    top: 14px;
  }

  .main-nav-icon {
    display: block;
  }
`;

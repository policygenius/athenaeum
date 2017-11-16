export const searchIcon = ({ searching }) => ({ breakpoints, spacing }) => `
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: ${searching ? 'auto' : 'pointer'};

  @media ${breakpoints.mobileOnly} {
    display: none;
  }

  @media ${breakpoints.desktop} {
    padding-left: ${spacing['24']};
  }
`;

export const searchIconMobile = () => ({ breakpoints }) => `
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;

  @media ${breakpoints.tablet} {
    display: none;
  }
`;

export const overflowIcon = props => ({ breakpoints, spacing }) => `
  display: none;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  padding-left: ${spacing['24']};

  @media ${breakpoints.tablet} {
    display: ${props.searching ? 'none' : 'flex'};
  }

  @media ${breakpoints.desktop} {
    display: none;
  }
`;

export const hamburgerCloseIcon = props => ({ breakpoints, spacing }) => `
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;

  @media ${breakpoints.mobileOnly} {
    padding-left: ${spacing['24']};
    // min-width needed to prevent sizing issue when switching from hamburger to close
    min-width: 42px;
  }

  @media ${breakpoints.tablet} {
    display: ${props.searching ? 'flex' : 'none'};
    flex-direction: column;
    justify-content: center;
    padding-right: ${props.searching ? '42px' : '0'};
  }
`;

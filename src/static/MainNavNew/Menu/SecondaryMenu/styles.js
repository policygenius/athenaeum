export const secondaryMenu = props => ({ breakpoints, spacing }) => `
  @media ${breakpoints.smallOnly} {
    display: ${props.overflowMenu ? 'none' : 'block'};
    padding: 0;

    > li {
      padding: 0 !important;
    }
  }

  @media ${breakpoints.mediumOnly} {
    display: ${props.overflowMenu ? 'flex' : 'none'};
    padding-right: ${props.overflowMenu ? spacing.ru(2) : '0'};
  }

  @media ${breakpoints.mediumUp} {
    flex-grow: 1;
    justify-content: flex-end;
    margin: 0;
  }

  @media ${breakpoints.largeUp} {
    display: ${props.overflowMenu ? 'none' : 'flex'};
  }
`;

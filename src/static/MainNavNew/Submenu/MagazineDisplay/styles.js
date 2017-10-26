export const introTextTopSpacer = ({ breakpoints, spacing }) => `
  @media ${breakpoints.mobileOnly} {
    margin-top: ${spacing['24']};
  }

  @media ${breakpoints.tabletOnly} {
    display: none;
  }

  @media ${breakpoints.desktop} {
    margin-top: ${spacing.ru(2)};
  }
`;

export const introTextBottomSpacer = ({ breakpoints, spacing }) => `
  margin-top: ${spacing['60']};

  @media ${breakpoints.desktop} {
    display: none;
  }
`;

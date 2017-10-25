export const productIntroWrapper = ({ breakpoints, spacing }) => `
  max-width: ${spacing.ru(11.25)};
  margin: 0 auto;

  @media ${breakpoints.mediumOnly} {
    max-width: 100%;
  }
`;
export const productIntroLockup = ({ breakpoints, spacing }) => `
  display: flex;
  align-items: center;
  padding: 0;
  justify-content: center;

  .header-text {
    padding-left: ${spacing['6']};
  }

  .product-intro-icon {
    min-width: 100px;
  }

  @media ${breakpoints.mediumOnly} {
    max-width: ${spacing.ru(12.5)};
    margin: 0 auto;
  }
`;

export const productIntroButtonWrapper = ({ breakpoints, spacing }) => `
  text-align: center;

  .product-intro-button {
    width: 100%;
  }

  @media ${breakpoints.mediumOnly} {
    max-width: ${spacing.ru(11.25)};
    margin-left: ${spacing['12']};
  }
`;

export const buttonSpacer = ({ breakpoints, spacing }) => `
  margin-top: 0;

  @media ${breakpoints.smallOnly} {
    margin-top: ${spacing['18']};
  }

  @media ${breakpoints.largeUp} {
    margin-top: ${spacing['12']};
  }
`;

export const introSpacer = ({ breakpoints, spacing }) => `
  margin-top: 0;

  @media ${breakpoints.smallOnly} {
    margin-top: ${spacing['24']};
  }

  @media ${breakpoints.mediumOnly} {
    margin-top: ${spacing['60']};
  }
`;

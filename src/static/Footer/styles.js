export const footer = ({ breakpoints }) => `
  background-color: #ffffff;
  margin: 0 auto;
  padding: 36px 0;

  @media ${breakpoints.mediumUp} {
    padding-left: 48px;
    padding-right: 48px;
  }

  @media ${breakpoints.largeUp} {
    max-width: 1280px;
    padding-left: 64px;
    padding-right: 64px;
  }
`;

export const divider = ({ breakpoints }) => `
    position: relative;
    height: 110%;

    &:after {
      content: '';
      position: absolute;
      border-right: 1px solid #b2b2b2;
      height: 100%;
      width: 100%;
      transform: translateX(-50%);
    }

    @media ${breakpoints.mediumOnly} {
      display: none;
    }

`;

export const rightColumn = ({ breakpoints }) => `

  @media ${breakpoints.smallOnly} {
    flex-direction: column-reverse;
  }
`;

export const socialMediaWrapper = ({ breakpoints }) => `
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    @media ${breakpoints.mediumUp} {
      justify-content: left;
    }
`;

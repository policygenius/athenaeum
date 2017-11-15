export const footer = ({ breakpoints }) => `
  background-color: #fff;
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
    padding-top: 60px;
  }
`;

export const divider = ({ breakpoints }) => `
    position: relative;
    display: none;

    &:after {
      content: '';
      position: absolute;
      border-left: 1px solid #b2b2b2;
      height: calc(100% + 65px);
      top: -17px;
      left: 50%;
    }

    @media ${breakpoints.largeUp} {
      display: block;
    }
`;

export const socialMediaWrapper = ({ breakpoints }) => `
    display: flex;
    align-items: center;
    justify-content: center;

    @media ${breakpoints.mediumUp} {
      justify-content: left;
    }
`;

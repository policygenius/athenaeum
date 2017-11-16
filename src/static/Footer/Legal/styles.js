export const legalWrapper = ({ breakpoints }) => `
  background-color: #edeeed;

  .legal-content {
    max-width: 1152px;
    margin: 0 auto;
  }

  @media ${breakpoints.mediumUp} {
    padding: 36px 48px;
  }

  @media ${breakpoints.largeUp} {
    padding: 36px 64px;
  }
`;

export const links = ({ spacing }) => `
  display: flex;
  position: relative;

  .icon {
    position: relative;
    margin-right: ${spacing[18]};
  }
`;

export const linksList = () => `

  align-items: center;

  .link-wrapper {
    a:hover {
      color: #2b2727;
    }
    &:after {
      content: '';
      position: relative;
      left: 18px;
      border-right: 1px solid #b2b2b2;
    }
  }

  li:last-child {
    .link-wrapper {
      &:after {
        content: none;
      }
    }
  }
`;

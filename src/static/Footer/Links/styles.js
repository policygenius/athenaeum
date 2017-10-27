export const links = ({ breakpoints, spacing }) => `
  display: flex;
  align-items: center;
  position: relative;

  .icon {
    margin-right: ${spacing[24]};
  }
`;

export const linksList = ({ breakpoints, spacing }) => `
  .link-wrapper {
    line-height: ${spacing[36]};
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

  li:first-child {
    padding-left: ${spacing[18]};
  }

  li:last-child {
    .link-wrapper {
      &:after {
        content: none;
      }
    }
  }

`;

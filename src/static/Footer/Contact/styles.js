export const contactWrapper = ({ breakpoints }) => `
  @media ${breakpoints.smallOnly} {
    padding-left: 24px;
    padding-right: 24px;
    margin-bottom: 32px;
    border-bottom: 1px solid #d6d6d6;
  }
`;
export const header = ({ breakpoints }) => `
  height: 36px;
  width: 193px;
  margin: 0 auto 36px;
  display: block;

  @media ${breakpoints.mediumUp} {
    height: 24px;
    width: 125px;
    margin: 0 0 12px;
    display: block;
  }
`;

export const address = ({ breakpoints }) => `
  margin-bottom: 36px;

  @media ${breakpoints.smallOnly} {
    display: none;
  }
`;

export const contactItem = ({ breakpoints, spacing }) => `

  margin-bottom: ${spacing[24]};

  p span {
    margin-right: 12px;
  }

  .contact-info {
    text-align: center;
  }

  @media ${breakpoints.mediumUp} {
    margin-bottom: ${spacing[36]};

    .contact-info {
      text-align: left;
    }

    .contact-icon {
      margin-bottom: 6px;
    }
  }
`;

export const contactItemHeader = () => `
  &:hover {
    color: #ff700a;
  }
`;

export const selectProduct = ({ breakpoints, spacing }) => `

  div:last-child {
    margin-bottom: ${spacing[60]};
  }

  @media ${breakpoints.smallOnly} {
    padding-left: 24px;
    padding-right: 24px;
    border-top: 1px solid #d6d6d6;
    padding-top: 32px;

    button {
      width: 100%;
    }
    div:first-child {
      margin-bottom: ${spacing[36]};
    }

    .column {
      padding: 0;
    }
  }

  @media ${breakpoints.mediumOnly} {
    display: flex;
  }

  @media ${breakpoints.largeUp} {
    .column {
      min-height: 312px;
    }
  }
`;

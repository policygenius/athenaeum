export const resourcesStyle = ({ breakpoints }) => `

  .resource-group {
    flex-basis: 0;
    flex-grow: 1;
  }

  .resources-list {

    p {
      &:hover {
        color: #ff700a;
      }
    }
  }

  .collapsed-resources {
    display: none;
  }

  @media ${breakpoints.smallOnly} {
    padding-left: 24px;
    padding-right: 24px;
    .resource-group {
      padding: 0;
      p span {
        margin-left: 12px;
      }
    }
  }
  @media ${breakpoints.mediumUp} {
    display: flex;

    .icon {
      display: none;
    }
  }
    @media ${breakpoints.largeUp} {
  .resource-group {
    min-height: 312px;
  }
}
`;

export const resourcesBottom = ({ breakpoints, spacing }) => `
  @media ${breakpoints.smallOnly} {
    margin-bottom: ${spacing[36]};
  }
`;

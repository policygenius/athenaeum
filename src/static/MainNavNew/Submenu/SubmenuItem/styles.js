export const itemWrapper = ({ breakpoints, spacing }) => `
  @media ${breakpoints.mediumUp} {
    margin-bottom: -${spacing['12']};
    padding-bottom: 13px;

    .item-header-link {
      border-right: 1px solid #dedede;
      padding: 0 ${spacing['18']};

      .item-header-text {
        padding-bottom: ${spacing['12']};
        margin-bottom: -${spacing['12']};
        border-bottom: 2px solid transparent;

        &.active {
          border-bottom: 2px solid black;
        }
      }
    }

    @media ${breakpoints.mediumOnly} {
      .item-more-link {
        padding-right: ${spacing.ru(2)};
      }
    }
  }
`;

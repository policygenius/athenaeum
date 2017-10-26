export const primaryHeader = props => ({ breakpoints, colors, spacing }) => {
  const {
    activePrimaryTab,
    activeName,
    showMobileMenu,
  } = props;

  const isActive = activePrimaryTab === activeName;

  const color = isActive || showMobileMenu ? colors.neutral1 : colors.neutral3;

  return `
    color: ${color};
    cursor: pointer;
    padding: ${spacing['18']} ${spacing['24']};

    &:hover {
      color: ${colors.neutral1};
      transition: color .3s;
    }

    @media ${breakpoints.mediumOnly} {
      display: ${activeName === 'about' ? 'none' : 'block'};
    }

    @media ${breakpoints.mediumUp} {
      padding: 0;
    }
  `;
};

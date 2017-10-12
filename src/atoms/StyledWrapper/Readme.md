### StyledWrapper Example:

```jsx
<StyledWrapper
  css={(variables) => `
    background: ${variables.colors.brand1};
    color: white;
    width: 50%;
    margin: auto;
    font-size: 2em;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 10px solid pink;

    .icon {
      height: 2em;

      g {
        fill: white;
      }
    }

    @media ${variables.breakpoints.largeUp} {
        background: ${variables.colors.accent2};
        width: 100%;

        .icon {
          display: none;
        }
    }
  `}
  component={Button}
>
  <Icon icon='veryPopular' className='icon' />So good!
</StyledWrapper>
```

Split Card Example:

```example
    <SplitCard
      columnLeft={<TextA line1='header' line2='subheader' />}
      columnRight={<TextB line1='10%' line2='subheader' />}
      onClose={() => alert('I feel so closed rn')}
      footerLeft='Footer left'
      footerRight='Footer right'
    />
```

optional `onClose` remove the x.
```example
    <SplitCard
      columnLeft={<TextA line1='header' line2='subheader' />}
      columnRight={<TextA line1='10%' line2='anything goes' />}
      onClick={() => alert('Hi text1 click!')}
      footerLeft='Footer left'
    />
```

`onClick` is bound to `footerLeft`. If a `footerLeft` prop is not passed in there won't be
anything to `onClick` on.
```example
    <SplitCard
      columnLeft={<TextA line1='header' line2='has an onclick' />}
      columnRight={<TextB line1='100%' line2='but no footer' />}
      onClick={() => alert('Hi text1 click!')}
    />
```

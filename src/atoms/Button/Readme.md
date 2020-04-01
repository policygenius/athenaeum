## Button Variants
Buttons come in a few variants, which change their look-and-feel.
The Buttons in these examples also have icons to demonstrate how the icon adapts to the variant.

### Default
```jsx
<Button
  icon='lock'
  onClick={() => alert('Button clicked')}
>
  Default Button
</Button>
```

#### Default Outlined
```jsx
<Button
  outline
  icon='lock'
  onClick={() => alert('Button clicked')}
>
  Outlined Default Button
</Button>
```

#### Default Disabled
```jsx
<Button
  disabled
  icon='lock'
  onClick={() => alert('Button clicked')}
>
  Disabled Default Button
</Button>
```

#### Default Outlined + Disabled
```jsx
<Button
  outline
  disabled
  icon='lock'
  onClick={() => alert('Button clicked')}
>
  Disabled Outlined Default Button
</Button>
```

### Info
```jsx
<Button
  variant='info'
  icon='lock'
  onClick={() => alert('Button clicked')}
>
  Info Button
</Button>
```

#### Info Outlined
```jsx
<Button
  outline
  variant='info'
  icon='lock'
  onClick={() => alert('Button clicked')}
>
  Info Outlined Button
</Button>
```

#### Info Disabled
```jsx
<Button
  disabled
  variant='info'
  icon='lock'
  onClick={() => alert('Button clicked')}
>
  Disabled Info Button
</Button>
```

#### Info Outlined + Disabled
```jsx
<Button
  outline
  disabled
  variant='info'
  icon='lock'
  onClick={() => alert('Button clicked')}
>
  Disabled Outlined Info Button
</Button>
```

## Unflexed Buttons
Buttons can also be unflexed, so that they will not expand to fill their parent

```jsx
<Button unflex>Unflexed Button</Button>
```

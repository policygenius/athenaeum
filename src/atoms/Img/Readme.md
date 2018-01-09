## Important Info:
- The `<Img />` component is unusual in that it doesn't automatically fill its parent container - it only has a max-width of 100%, but it will not automatically grow to fit its parent.
- Images rendered with this component will be lazyloaded automatically via [lazySizes](https://github.com/aFarkas/lazysizes), but requires lazysizes to be loaded separately.
- The `<Img />` component can also take any prop that an HTML5 img can take.


### Example: Using a regular `<img />` tag and srcset
```jsx
    <Img />
```

### Example: Using different pictures for each view size (mobile, tablet, desktop)
If you use these params, be sure to include either a `src` or and `imgixSrc`

```jsx
<Img
  mobileSrc='https://learnedia.com/wp-content/uploads/2017/02/cute-dog.jpg'
  tabletSrc='https://learnedia.com/wp-content/uploads/2017/02/puppy.jpg'
  imgixSrc='placeholders/stocksy-medium-2.jpg'
/>
```

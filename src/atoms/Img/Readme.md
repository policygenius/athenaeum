### Img Example:

The `<Img />` component can take also any prop that an HTML5 img can take.

```jsx
    <Img />
```

#### Using different pictures for each view size (mobile, tablet, desktop)
If you use these params, be sure to include either a `src` or and `imgixSrc`

```jsx
<Img
  mobileSrc='https://learnedia.com/wp-content/uploads/2017/02/cute-dog.jpg'
  tabletSrc='https://learnedia.com/wp-content/uploads/2017/02/puppy.jpg'
  desktopImgixSrc='placeholders/stocksy-medium-2.jpg'
  imgixSrc='placeholders/stocksy-medium-2.jpg'
/>
```

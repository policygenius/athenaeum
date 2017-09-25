Playback Card Example:

```jsx
  <PlaybackCard
    header='Policyholder Details'
    icon='greenCheckWithCircle'
    onClick={() => alert('edit clicked')}
    leftPanel={
      <Layout
        bottomSpacing='xSmall'
        fullwidth
      >
        <TextD
          line1='Name'
          line2='Victoria Bangladesh'
          spacer={3}
        />

        <TextD
          line1='Email'
          line2='victoriabangladesh19283@gmail.com'
        />
      </Layout>
    }

    rightPanel={
      <Layout
        smallCols={[ 6 ]}
        mediumCols={[ 12 ]}
        bottomSpacing='xSmall'
        fullwidth
      >
        <TextD
          line1='Date of Birth'
          line2='9/19/1987'
          spacer={3}
        />
        <TextD
          line1='Phone Number'
          line2='917-887-8424'
        />
      </Layout>
    }
  />
```

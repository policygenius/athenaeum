Playback Card Example:

```example
  <PlaybackCard
    header='Policyholder Details'
    icon='greenCheckWithCircle'
    onClick={() => alert('edit clicked')}
    leftPanel={
      <Layout
        bottomSpacing='xSmall'
        fullwidth
      >
        <TextLockup
          variant='G'
          header='Name'
          subheader='Victoria Bangladesh'
        />

        <TextLockup
          variant='G'
          header='Email'
          subheader='victoriabangladesh19283@gmail.com'
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
        <TextLockup
          variant='G'
          header='Date of Birth'
          subheader='9/19/1987'
        />
        <TextLockup
          variant='G'
          header='Phone Number'
          subheader='917-887-8424'
        />
      </Layout>
    }
  />
```

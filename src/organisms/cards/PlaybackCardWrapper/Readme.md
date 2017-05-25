PlaybackCardWrapper Example:

```example
    <PlaybackCardWrapper
      logo={<Icon icon='stillwaterLogoBlack' sizeAuto />}
      amount={10.50}
      footer='View Full Policy Details'
      footerOnClick={() => alert('go')}
      unit='/mo'
    >

      <PlaybackCard
        header='Policyholder Details'
        onClick={() => alert('edit clicked')}
        leftPanel={
          <div>
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
          </div>
        }

        rightPanel={
          <div>
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
          </div>
        }
      />

      <PlaybackCard
        header='Another Section of Details'
        onClick={() => alert('edit clicked')}
        leftPanel={
          <div>
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
          </div>
        }

        rightPanel={
          <div>
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
          </div>
        }
      />

    </PlaybackCardWrapper>
```

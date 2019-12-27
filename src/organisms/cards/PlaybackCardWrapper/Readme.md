PlaybackCardWrapper Example:

```jsx
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
        leftPanel={(
          <div>
            <TextD
              line1='Name'
              line2='Victoria Bangladesh'
            />

            <TextD
              line1='Email'
              line2='victoriabangladesh19283@gmail.com'
            />
          </div>
        )}

        rightPanel={(
          <div>
            <TextD
              line1='Date of Birth'
              line2='9/19/1987'
            />
            <TextD
              line1='Phone Number'
              line2='917-887-8424'
            />
          </div>
        )}
      />

      <PlaybackCard
        header='Another Section of Details'
        onClick={() => alert('edit clicked')}
        leftPanel={(
          <div>
            <TextD
              line1='Name'
              line2='Victoria Bangladesh'
            />

            <TextD
              line1='Email'
              line2='victoriabangladesh19283@gmail.com'
            />
          </div>
        )}

        rightPanel={(
          <div>
            <TextD
              line1='Date of Birth'
              line2='9/19/1987'
            />
            <TextD
              line1='Phone Number'
              line2='917-887-8424'
            />
          </div>
        )}
      />

    </PlaybackCardWrapper>
```

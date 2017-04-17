ComparisonTable Example:

```example
const ComparisonTableRow = require('./ComparisonTableRow').default;

  <ComparisonTable>
    <ComparisonTableRow header>
      <TextComponent
        tag='span'
        type={3}
        variant='underline'
        cols={6}
      >
        Why apply with us?
      </TextComponent>
      <TextLockup
        variant='E'
        header='Applying On'
        primaryIcon='metlife'
        cols={3}
      />
      <TextLockup
        variant='E'
        header='Applying On'
        primaryIcon='pgLogoOrange'
        cols={3}
      />
    </ComparisonTableRow>
    <ComparisonTableRow>
      <TextLockup
        variant='C'
        header='Best price promise'
        subheader='The same no matter where you buy; rates are regulated by the government'
        cols={6}
      />
      <TextLockup
        variant='F'
        header='Applying On'
        primaryIcon='metlife'
        secondaryIcon='checkmark'
        cols={3}
      />
      <TextLockup
        variant='F'
        header='Applying On'
        primaryIcon='pgLogoOrange'
        secondaryIcon='checkmark'
        cols={3}
      />
    </ComparisonTableRow>
    <ComparisonTableRow>
      <TextLockup
        variant='C'
        header='Compare plans'
        subheader='Compare across multiple carriers to get the best policy at the right price'
        cols={6}
      />
      <TextLockup
        variant='F'
        header='Applying On'
        primaryIcon='metlife'
        secondaryIcon='closeAccent'
        cols={3}
      />
      <TextLockup
        variant='F'
        header='Applying On'
        primaryIcon='pgLogoOrange'
        secondaryIcon='checkmark'
        cols={3}
      />
    </ComparisonTableRow>
    <ComparisonTableRow>
      <TextLockup
        variant='C'
        header='Modern technology'
        subheader={"An easier and hassle-free application process so there's less work for you"}
        cols={6}
      />
      <TextLockup
        variant='F'
        header='Applying On'
        primaryIcon='metlife'
        secondaryIcon='closeAccent'
        cols={3}
      />
      <TextLockup
        variant='F'
        header='Applying On'
        primaryIcon='pgLogoOrange'
        secondaryIcon='checkmark'
        cols={3}
      />
    </ComparisonTableRow>
    <ComparisonTableRow>
      <TextLockup
        variant='C'
        header='Dedicated support'
        subheader='Our salaried customer support agents will give special attention to your application'
        cols={6}
      />
      <TextLockup
        variant='F'
        header='Applying On'
        primaryIcon='metlife'
        secondaryIcon='closeAccent'
        cols={3}
      />
      <TextLockup
        variant='F'
        header='Applying On'
        primaryIcon='pgLogoOrange'
        secondaryIcon='checkmark'
        cols={3}
      />
    </ComparisonTableRow>
  </ComparisonTable>
```

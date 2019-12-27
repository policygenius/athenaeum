Full Table
```jsx
const { Premium } = require('organisms/cards/SimplePolicyCard/Premium');

<div>
  <ComparisonTable.Table>
    <ComparisonTable.Header offset>
      <div>
        <Icon
          icon='policygeniusSymbol'
        />
      </div>
      <div>
        <Icon
          icon='rclLogo'
        />
      </div>
    </ComparisonTable.Header>
    <ComparisonTable.Row
      tooltip
      subHeader='These prices are very close! Rates are very competitive right now, especially for people with your profile.'
    >
    <Text
      type={7}
      font='a'
    >
      Cost
    </Text>
      <Premium
        premium={{
          price: 32.49,
          format: 'mo'
        }}
      />
      <Premium
        premium={{
          price: 32.49,
          format: 'mo'
        }}
      />
    </ComparisonTable.Row>
    <ComparisonTable.Row
      tooltip
      subHeader='The amount of money your benficiaries would receive.'
    >
      <Text
        type={7}
        font='a'
      >
        Coverage Amount
      </Text>
      <Text
        type={5}
        font='a'
      >
        $500,000
      </Text>
    </ComparisonTable.Row>
    <ComparisonTable.Row>
      <Text
        type={7}
        font='a'
      >
        Term
      </Text>
      <Text
        type={5}
        font='a'
      >
        20 Years
      </Text>
    </ComparisonTable.Row>

    <ComparisonTable.Row
      tooltip
      subHeader='BBB ratings are based on a companys treatment of its customers'
    >
      <Text
        size={8}
        font='a'
      >
        Customer Service
      </Text>
      <StarRating size={18} rating={5} />
      <StarRating size={18} rating={4} />
    </ComparisonTable.Row>
  </ComparisonTable.Table>

  <ComparisonTable.Table>
    <ComparisonTable.Header>
      <Text font='a' type={5}>Important Stuff</Text>
      <div>
        <Icon
          icon='policygeniusSymbol'
        />
      </div>
      <div>
        <Icon
          icon='rclLogo'
        />
      </div>
    </ComparisonTable.Header>
    <ComparisonTable.Row>
    <Text
      type={7}
      font='a'
    >
      Very imporant stuff
    </Text>
    <Text>Applies to both of these carriers</Text>
    </ComparisonTable.Row>
    <ComparisonTable.Row
      subHeader='Important to know but not super important'
    >
      <Text
        type={7}
        font='a'
      >
        Some stuff you should know
      </Text>
      <Text>Here's stuff you should know here</Text>
      <Text>And stuff over here</Text>
    </ComparisonTable.Row>
  </ComparisonTable.Table>
</div>
```

Single Table
```jsx
const { Premium } = require('organisms/cards/SimplePolicyCard/Premium');

<div>
  <ComparisonTable.Table tableItems={1}>
    <ComparisonTable.Header offset showMissing outlineMissing>
      <div>
        <Icon
          icon='policygeniusSymbol'
        />
      </div>
      <div>
        <Icon
          icon='rclLogo'
        />
      </div>
    </ComparisonTable.Header>
    <ComparisonTable.Row
      tooltip
      subHeader='These prices are very close! Rates are very competitive right now, especially for people with your profile.'
      showMissing
      highlightMissing
      outlineMissing
    >
    <Text
      type={7}
      font='a'
    >
      Cost
    </Text>
      <Premium
        premium={{
          price: 32.49,
          format: 'mo'
        }}
      />
      <Premium
        premium={{
          price: 32.49,
          format: 'mo'
        }}
      />
    </ComparisonTable.Row>
    <ComparisonTable.Row
      tooltip
      subHeader='The amount of money your benficiaries would receive.'
      showMissing
    >
      <Text
        type={7}
        font='a'
      >
        Coverage Amount
      </Text>
      <Text
        type={5}
        font='a'
      >
        $500,000
      </Text>
    </ComparisonTable.Row>
    <ComparisonTable.Row
      showMissing
    >
      <Text
        type={7}
        font='a'
      >
        Term
      </Text>
      <Text
        type={5}
        font='a'
      >
        20 Years
      </Text>
    </ComparisonTable.Row>

    <ComparisonTable.Row
      tooltip
      subHeader='BBB ratings are based on a companys treatment of its customers'
      showMissing
    >
      <Text
        size={8}
        font='a'
      >
        Customer Service
      </Text>
      <StarRating size={18} rating={5} />
    </ComparisonTable.Row>
  </ComparisonTable.Table>

  <ComparisonTable.Table tableItems={1}>
    <ComparisonTable.Header>
      <Text font='a' type={5}>Important Stuff</Text>
      <div>
        <Icon
          icon='policygeniusSymbol'
        />
      </div>
    </ComparisonTable.Header>
    <ComparisonTable.Row>
    <Text
      type={7}
      font='a'
    >
      Very imporant stuff
    </Text>
    <Text>Applies to both of these carriers</Text>
    </ComparisonTable.Row>
    <ComparisonTable.Row
      subHeader='Important to know but not super important'
    >
      <Text
        type={7}
        font='a'
      >
        Some stuff you should know
      </Text>
      <Text>Here's stuff you should know here</Text>
    </ComparisonTable.Row>
  </ComparisonTable.Table>

  <ComparisonTable.Table tableItems={1}>
    <ComparisonTable.Header showMissing outlineMissing>
      <Text font='a' type={5}>Important Stuff</Text>
      <div>
        <Icon
          icon='policygeniusSymbol'
        />
      </div>
    </ComparisonTable.Header>
    <ComparisonTable.Row showMissing outlineMissing>
    <Text
      type={7}
      font='a'
    >
      Very imporant stuff
    </Text>
    <Text>Applies to both of these carriers</Text>
    </ComparisonTable.Row>
    <ComparisonTable.Row
      subHeader='Important to know but not super important'
      showMissing
      outlineMissing
    >
      <Text
        type={7}
        font='a'
      >
        Some stuff you should know
      </Text>
      <Text>Here's stuff you should know here</Text>
    </ComparisonTable.Row>
  </ComparisonTable.Table>
</div>
```

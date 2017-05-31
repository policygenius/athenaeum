ComparisonTable Example:

```example
  // Same content that goes inside the comparison rows.
  const IconPg = <Icon icon='pgLogoOrange' width='120px' height='24px' />;
  const IconMetLife = <Icon icon='metlife' width='120px' height='24px' />;
  const comparePg = <LogoTextA line1='header' logo={IconPg} />;
  const compareMetLife = <LogoTextA line1='header' logo={IconMetLife} />;

  // When using this Component use its named imports.
  // import ComparisonTable, { TableHeader, TableRow } from 'organisms/tables/ComparisonTable';
  const TableHeader = require('organisms/tables/ComparisonTable').TableHeader;
  const TableRow = require('organisms/tables/ComparisonTable').TableRow;

  <ComparisonTable>
    <TableHeader>
      <Text tag='span' type={3} variant='underline' cols={6}>Why apply with us?</Text>

      <LogoTextA
        line1='Applying on'
        logo={<Icon icon='metlife' width='120px' height='24px' />}
        cols={3}
      />

      <LogoTextA
        line1='Applying on'
        logo={<Icon icon='pgLogoOrange' width='120px' height='24px' />}
        cols={3}
      />
    </TableHeader>

    <TableRow>
      <TextC
        line1='Best price promise'
        line2='The same no matter where you buy; rates are regulated by the government'
        cols={6}
      />

      <ComparisonRowItem label={compareMetLife} checked cols={3} />
      <ComparisonRowItem label={comparePg} checked cols={3} />
    </TableRow>

    <TableRow>
      <TextC
        line1='Compare plans'
        line2='Compare across multiple carriers to get the best policy at the right price'
        cols={6}
      />

      <ComparisonRowItem label={compareMetLife} cols={3} />
      <ComparisonRowItem label={comparePg} checked cols={3} />
    </TableRow>

    <TableRow>
      <TextC
        line1='Modern technology'
        line2={"An easier and hassle-free application process so there's less work for you"}
        cols={6}
      />

      <ComparisonRowItem label={compareMetLife} cols={3} />
      <ComparisonRowItem label={comparePg} checked cols={3} />
    </TableRow>

    <TableRow>
      <TextC
        line1='Dedicated support'
        line2='Our salaried customer support agents will give special attention to your application'
        cols={6}
      />

      <ComparisonRowItem label={compareMetLife} cols={3} />
      <ComparisonRowItem label={comparePg} checked cols={3} />
    </TableRow>
  </ComparisonTable>
```

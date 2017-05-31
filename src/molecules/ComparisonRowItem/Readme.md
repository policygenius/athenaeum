### ComparisonRowItem

This is a responsive helper component used with `<ComparisonTable />` to render cells that display differently on smaller devices. On larger screen it renders as  a checkmark or x icon. On small screens it renders as a `<LogoText />`.

```example
    const IconPg = <Icon icon='pgLogoOrange' width='120px' height='24px' />;
    const IconMetLife = <Icon icon='metlife' width='120px' height='24px' />;
    const LogoPg = <LogoTextA line1='header' logo={IconPg} />;
    const LogoMetLife = <LogoTextA line1='header' logo={IconMetLife} />;

    <div>
      <ComparisonRowItem label={LogoMetLife} />
      <ComparisonRowItem label={LogoPg} checked />
    </div>
```

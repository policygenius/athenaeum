
``` 
  <Layout mediumCols={[3]}> 
    <CompanyCard
      rel
      target
      starRating={3}
      linkUrl='https://companycard.com'
      linkText='Read'
      imageAttr={{
        src: 'https://cdn.policygenius.com/assets/insurance-cards-logos/aig-dark-07c1cd0ae0d9476ca93abf9b597e43cb.png'
      }}
      variant='small'
    />

    <CompanyCard
      starRating={5}
      imageAttr={{
        src: 'https://policygenius-images.imgix.net/photos/life/lincoln-financial-black-logo.svg?fit=max&auto=format&ch=Width,DPR&w={width}'
      }}
      variant='small'
    />

    <CompanyCard
      imageAttr={{
        src: 'https://policygenius-images.imgix.net/photos/life/lincoln-financial-black-logo.svg?fit=max&auto=format&ch=Width,DPR&w={width}'
      }}
      variant='small'
    />
  </Layout>
```

#### Large Variant (`variant='large'`)
``` 
  <Layout mediumCols={[4]}>
    <CompanyCard
      rel
      target
      starRating={1}
      linkUrl='https://companycard.com'
      linkText='Read'
      imageAttr={{
        src: 'https://cdn.policygenius.com/assets/insurance-cards-logos/aig-dark-07c1cd0ae0d9476ca93abf9b597e43cb.png'
      }}
      variant='large'
    />
  
    <CompanyCard
      starRating={2}
      imageAttr={{
        src: 'https://policygenius-images.imgix.net/photos/life/lincoln-financial-black-logo.svg?fit=max&auto=format&ch=Width,DPR&w={width}'
      }}
      variant='large'
    />

    <CompanyCard
      imageAttr={{
        src: 'https://policygenius-images.imgix.net/photos/life/lincoln-financial-black-logo.svg?fit=max&auto=format&ch=Width,DPR&w={width}'
      }}
      variant='large'
    />
  </Layout>

```





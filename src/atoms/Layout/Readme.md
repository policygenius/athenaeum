List of Breakpoints:
* small: 0px
* medium: 768px
* large: 1024px
* x-large: 12800px
* xx-large: 1440px

Alignment (vertical and horizontal):
* center
* start
* end

Layout Examples:

    <div>
      <TextComponent type={3}>Same Width Columns</TextComponent>
      <Layout 
        childCols={ [6] }
      >
        <Button>Hello</Button>
        <Button>World</Button>
        <Button>Hello</Button>
        <Button>World</Button>
      </Layout>

      <Spacer
        medium />

      <TextComponent type={3}>Repeating Different Width Columns</TextComponent>
      <Layout
        childCols={ [9, 3] }
        breakpoint='large'
      >
        <Button>Hello</Button>
        <Button>World</Button>
        <Button>Hello</Button>
        <Button>World</Button>
      </Layout>

      <Spacer
        medium />

      <TextComponent type={3}>Specifc Width Pattern</TextComponent>
      <Layout 
        childCols={ [8, 4, 4, 8] }
      >
        <Button>Hello</Button>
        <Button>World</Button>
        <Button>Hello</Button>
        <Button>World</Button>
      </Layout>
    </div>

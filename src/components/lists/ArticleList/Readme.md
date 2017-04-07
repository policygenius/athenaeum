Item example:

    <ArticleList
      type="articleList"
      data={[
        {
          id: 1,
          href: "#",
          img: "https://placehold.it/350x150",
          title: "Proin aliquam tortor",
          subHeader: "In rhoncus orci et ex fermentum"
        },
        {
          id: 2,
          href: "#",
          img: "https://placehold.it/350x150",
          title: "Proin aliquam tortor",
          subHeader: "In rhoncus orci et ex fermentum"
        }
      ]}
      mapProps={{
        link: "href",
        imageSrc: "img",
        header: "title"
      }}
    />


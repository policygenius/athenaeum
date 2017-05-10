Current Variants:
* basic (default)
* centered
* compact
* simple

In the examples below, we utilized the exposed `data-src` via the `dataSrc` prop to pass in a string that allows
[holder.js](https://www.npmjs.com/package/holderjs) to render our placeholder images.

Basic Example:

```example
    <ImageAside
      dataSrc='holder.js/300x300?auto=yes'
      header='Vivamus ultricies augue'
      subheader='Maecenas gravida ex a sed vulputate, sodales cursus risus blandit.'
    />
```

Max Width Example:

```example
    <ImageAside
      dataSrc='holder.js/300x300?auto=yes'
      maxWidth='200px'
      header='Vivamus ultricies augue'
      subheader='Maecenas gravida ex a sed vulputate, sodales cursus risus blandit.'
    />
```

Center Example:

```example
    <ImageAside
      centered
      dataSrc='holder.js/100x100'
      header='Vivamus ultricies augue'
      subheader='Maecenas gravida ex a sed vulputate, sodales cursus risus blandit.'
    />
```

Compact Example:

```example
    <ImageAside
      compact
      dataSrc='holder.js/80x80'
      header='Vivamus ultricies augue'
      subheader='Maecenas gravida ex a sed vulputate, sodales cursus risus blandit.'
    />
```


Simple Example:

```example
    <ImageAside
      simple
      dataSrc='holder.js/45x45'
      header='Vivamus ultricies augue'
    />
```

Small Example:

```example
    <ImageAside
      small
      dataSrc='holder.js/20x20'
      header='Vivamus ultricies augue'
    />
```

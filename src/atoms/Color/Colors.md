Our brand colors:

    // This is just example code to generate the above palette

    const groupBy = require('lodash/groupBy');
    const partition = require('lodash/partition');
    const styles = require('atoms/Color/colors_map.module.scss');

    function Colors({ styleNames, groupFn }) {
      const rows = Object.values(groupBy(styleNames, groupFn));

      return (
        <div>
          {
            rows.map((styleNames, idx) =>
              <div className={styles['color-wrapper']} key={idx}>
                {
                  styleNames.map(styleName =>
                    <div className={styles[styleName]} key={styleName}/>
                  )
                }
              </div>
            )
          }
        </div>
      );
    }

    function DisplayExampleColors() {
      const styleNames = Object.keys(styles);
      const [brandStyleNames, semanticStyleNames] = partition(
        styleNames,
        styleName => styleName.startsWith('brand-')
      );

      return (
        <div>
          <h2>Brand colors</h2>
          <p>
            These are the raw color swatches that may be used throughout the design system,
            devoid of any semantic meaning.
          </p>
          <Colors styleNames={brandStyleNames} groupFn={styleName => styleName.split('-')[1]} />

          <h2>Semantic colors</h2>
          <p>
            These are specific usages of the brand color swatches above, but with semantic
            meaning attached, meant to be used in certain specific situations
            (eg. <code>primary-1</code> for primary CTAs).
          </p>
          <Colors styleNames={semanticStyleNames} groupFn={styleName => styleName.split('-')[0]} />
        </div>
      );
    }

    <DisplayExampleColors />

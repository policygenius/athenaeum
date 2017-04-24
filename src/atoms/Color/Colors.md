Our brand colors:


    const styles = require('atoms/Color/colors_map.module.scss');

    function getColorArray() {
      let all_colors = [[],[],[],[]];
      let types = ['neutral', 'brand', 'accent', 'action'];

      for (style in styles) {
        types.forEach( (type, idx) => {
          if( style.indexOf(type) >= 0 ) {
            all_colors[idx].push(
              <div className={ styles[style] } key={ style }></div>
            )
          }
        })
      }

      return all_colors;
    }

    function DisplayExampleColors ( props ) {
      return (
        <div className={ styles['color-wrapper'] }>
          {
            getColorArray().map(( set, idx ) => {
              return (
                <div
                  className={ styles['color-wrapper'] }
                  key={ idx }
                >
                  { set }
                </div>
              )
            })
          }
        </div>
      )
    }
    <DisplayExampleColors />


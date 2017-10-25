import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import {
  Layout,
  List,
} from 'athenaeum';

import ArticleImage from '../../ArticleImage';

class ProductArticleList extends Component {
  constructor() {
    super();

    this.state = {
      loadImg: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.active && !this.state.loadImg) {
      this.setState({ loadImg: true });
    }
  }

  render() {
    const {
      data,
      className,
    } = this.props;

    return (
      <div className={classnames(className)}>
        <Layout
          smallCols={[12]}
          mediumCols={[6, 6, 12]}
          largeCols={[4]}
        >
          {
            data.map((item) => {
              const imgProps = {
                'data-src': item.imageSrc,
              };

              if (this.state.loadImg) {
                imgProps.src = item.imageSrc;
              }

              return (
                <ArticleImage
                  header={item.header}
                  imgProps={imgProps}
                  link={item.link}
                />
              );
            })
          }
        </Layout>
      </div>
    );
  }
}

ProductArticleList.propTypes = {
  data: PropTypes.array,
  className: PropTypes.string,
  active: PropTypes.bool,
};

export default ProductArticleList;

import React, { Component } from 'react';

import Intro from '../Intro';
import BlogArticleList from '../ArticleList/Blog';

import styles from './main_nav_magazine_display.module.scss';
import sharedStyles from '../main_nav_submenu.module.scss';

import { fetchPosts } from '../../utils/fetchMagazinePosts';

class MagazineDisplay extends Component {
  constructor() {
    super();

    this.state = {
      ['latest-magazine']: [],
      ['money-magazine']: [],
      ['tech-magazine']: [],
      ['health-magazine']: [],
      ['auto-magazine']: [],
      ['pet-magazine']: [],
      ['insurance-magazine']: [],
    };
  }

  componentWillReceiveProps(nextProps) {
    const emptyPosts = this.state[this.props.activeName].length === 0;
    const hasTag = !!this.props.tag;

    if (nextProps.active === this.props.activeName && emptyPosts) {
      Promise.all([
        fetchPosts({
          featured: "false",
          tag: this.props.tag,
          limit: 4,
        }),
        fetchPosts({
          featured: "true",
          tag: this.props.tag,
          limit: 2,
        })
      ])
        .then(data => {
          this.setState({
            [this.props.activeName]: [
              {
                type: 'list',
                header: 'Recommended',
                posts: data[0].posts,
              },
              {
                type: 'featured',
                post: data[1].posts[0],
              },
              {
                type: 'featured',
                post: data[1].posts[1],
              }
            ]
          });
        })
    }
  }

  render() {
    const {
      headerText,
      setMobileCollapsedMenu,
      intro,
      active,
      activeName,
    } = this.props;

    return (
      <div className={sharedStyles['wrapper']}>
        <ul className={sharedStyles['panel']}>
          <li
            className={sharedStyles['mobile-back-wrapper']}
            onClick={() => setMobileCollapsedMenu(null)}
          >
            <span className={sharedStyles['mobile-back-header']}>{ headerText }</span>
          </li>

          <Intro
            product={intro.textType}
            linkHref={intro.link}
            active={active === activeName}
            className={styles['intro']}
          />

          <BlogArticleList
            data={this.state[activeName]}
            className={styles['submenu-list-wrapper']}
          />

          <li className={sharedStyles['mobile-scroll-buffer']}></li>
        </ul>
      </div>
    );
  }
}

export default MagazineDisplay;


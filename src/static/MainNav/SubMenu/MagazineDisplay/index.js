import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Intro from '../Intro';
import BlogArticleList from '../ArticleList/Blog';

import styles from './main_nav_magazine_display.module.scss';
import sharedStyles from '../main_nav_submenu.module.scss';

import { fetchPosts } from '../../utils/fetchMagazinePosts';
import fullBlogUrl from '../../utils/fullBlogUrl';

class MagazineDisplay extends Component {
  constructor() {
    super();

    this.state = {
      'latest-magazine': {
        loading: true,
        data: [],
      },
      'money-magazine': {
        loading: true,
        data: [],
      },
      'tech-magazine': {
        loading: true,
        data: [],
      },
      'health-magazine': {
        loading: true,
        data: [],
      },
      'auto-magazine': {
        loading: true,
        data: [],
      },
      'pet-magazine': {
        loading: true,
        data: [],
      },
      'insurance-magazine': {
        loading: true,
        data: [],
      },
    };
  }

  componentWillReceiveProps(nextProps) {
    const emptyPosts = this.state[this.props.activeName].data.length === 0;

    if (nextProps.active === this.props.activeName && emptyPosts) {
      Promise.all([
        fetchPosts({
          featured: 'false',
          tag: this.props.tag,
          limit: 4,
        }),
        fetchPosts({
          featured: 'true',
          tag: this.props.tag,
          limit: 2,
        })
      ])
        .then((data) => {
          const recommendedPosts = data[0].posts.map((p) => {
            const post = p;

            post.url = fullBlogUrl(p.url);

            return post;
          });

          this.setState({
            [this.props.activeName]: {
              loading: false,
              data: [
                {
                  type: 'list',
                  header: 'Recommended',
                  posts: recommendedPosts,
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
            }
          });
        });
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
            loading={this.state[activeName].loading}
            data={this.state[activeName].data}
            className={styles['submenu-list-wrapper']}
          />

          <li className={sharedStyles['mobile-scroll-buffer']}></li>
        </ul>
      </div>
    );
  }
}

MagazineDisplay.propTypes = {
  activeName: PropTypes.string,
  active: PropTypes.string,
  tag: PropTypes.string,
  headerText: PropTypes.string,
  setMobileCollapsedMenu: PropTypes.func,
  intro: PropTypes.object,
};

export default MagazineDisplay;

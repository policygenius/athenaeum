import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Spacer from 'atoms/Spacer';
import Layout from 'atoms/Layout';
import Col from 'atoms/Layout/Col';
import Hide from 'wrappers/Hide';

import BlogIntro from '../Intro/Blog';
import LinkList from '../LinkList';
import ArticleImage from '../ArticleImage';
import MobileBack from '../MobileBack';
import { fetchPosts } from '../../utils/fetchMagazinePosts';
import fullBlogUrl from '../../utils/fullBlogUrl';

import styles from '../ProductDisplay/product_display.module.scss';

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

    if (nextProps.isActive && emptyPosts) {
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
          const formattedPosts = idx => data[idx].posts.map((p) => {
            const post = p;

            post.url = fullBlogUrl(p.url);

            return post;
          });

          const featuredPosts = formattedPosts(1);

          this.setState({
            [this.props.activeName]: {
              loading: false,
              data: [
                {
                  type: 'list',
                  header: 'Recommended',
                  posts: formattedPosts(0),
                },
                {
                  type: 'featured',
                  post: featuredPosts[0],
                },
                {
                  type: 'featured',
                  post: featuredPosts[1],
                }
              ]
            }
          });
        });
    }
  }

  get list() {
    const {
      activeName,
      mobileCollapsedMenu,
    } = this.props;

    const data = this.state[activeName].data;

    return (
      data.map((item) => {
        if (item.type === 'list') {
          return (
            <Col
              fullwidth
              key={item.header}
              className={styles['display-list']}
            >
              <LinkList
                item={item}
              />
            </Col>
          );
        }

        if (item.type === 'featured') {
          return (
            <Col
              key={item.post.url}
              fullwidth={mobileCollapsedMenu}
            >
              <ArticleImage
                header={item.post.title}
                imgProps={{
                  src: `${item.post.feature_image}?fit=crop&w=640&h=360`,
                }}
                link={item.post.url}
              />
            </Col>
          );
        }

        return null;
      })
    );
  }

  render() {
    const {
      headerText,
      setMobileCollapsedMenu,
      intro,
      isActive,
      activeName,
      mobileCollapsedMenu,
    } = this.props;

    const displayClasses = classnames(
      styles['submenu-display'],
      isActive && styles['submenu-display-active'],
      mobileCollapsedMenu === activeName && styles['mobile-collapsed'],
    );

    return (
      <div className={displayClasses}>
        <MobileBack
          setMobileCollapsedMenu={setMobileCollapsedMenu}
          text='Magazine'
        />

        <Spacer size={36} />

        <Layout
          fullwidth
          smallCols={[ 12 ]}
          largeCols={[ 4, 8 ]}
          className={styles.content}
        >
          <Col
            className={styles.intro}
          >
            <Hide hideOn='tablet desktop'>
              <Spacer size={24} />
            </Hide>
            <Hide hideOn='mobile tablet'>
              <Spacer size={36} />
              <Spacer size={12} />
            </Hide>

            <BlogIntro
              intro={intro}
              headerText={headerText}
            />

            <Hide hideOn='desktop'>
              <Spacer size={60} />
            </Hide>
          </Col>

          <Col
            fullwidth
          >
            <Layout
              fullwidth
              smallCols={[ 12 ]}
              mediumCols={[ 4 ]}
            >
              { this.list }
            </Layout>
          </Col>
        </Layout>
        <Spacer size={36} />
        <Spacer size={12} />
      </div>
    );
  }
}

MagazineDisplay.propTypes = {
  isActive: PropTypes.bool,
  activeName: PropTypes.string,
  tag: PropTypes.string,
  headerText: PropTypes.string,
  setMobileCollapsedMenu: PropTypes.func,
  intro: PropTypes.object,
  mobileCollapsedMenu: PropTypes.string,
};

export default MagazineDisplay;

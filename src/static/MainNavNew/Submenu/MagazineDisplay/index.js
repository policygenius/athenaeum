import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Spacer from 'atoms/Spacer';
import Layout from 'atoms/Layout';
import Col from 'atoms/Layout/Col';
import StyledWrapper from 'atoms/StyledWrapper';

import { generate } from 'shortid';

import BlogIntro from '../Intro/Blog';
import LinkList from '../LinkList';
import ArticleImage from '../ArticleImage';
import MobileBack from '../MobileBack';
import { fetchPosts } from '../../utils/fetchMagazinePosts';

import { introTextTopSpacer, introTextBottomSpacer } from './styles';

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
          const recommendedPosts = data[0].posts.map((p) => {
            const post = p;

            post.url = p.url;

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
              key={generate()}
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
              key={generate()}
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

    const displayClasses = [
      styles['submenu-display'],
      isActive && styles['submenu-display-active'],
      mobileCollapsedMenu === activeName && styles['mobile-collapsed'],
    ];

    return (
      <div className={classnames(...displayClasses)}>
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
            <StyledWrapper css={introTextTopSpacer} />

            <BlogIntro
              intro={intro}
              headerText={headerText}
            />

            <StyledWrapper css={introTextBottomSpacer} />
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

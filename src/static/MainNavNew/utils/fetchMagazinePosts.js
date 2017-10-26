import 'whatwg-fetch';
import fullBlogUrl from './fullBlogUrl';

export const fetchPosts = (options = {}) => {
  const includeTag = options.tag ? `%2Btags:[${options.tag}]` : '';
  const filter = `featured:${options.featured}${includeTag}`;
  const secret = window.GATSBY_GHOST_API_CLIENT_SECRET || process.env.GATSBY_GHOST_API_CLIENT_SECRET;

  return fetch(`${fullBlogUrl()}/ghost/api/v0.1/posts/?filter=${filter}&limit=${options.limit}&client_id=ghost-frontend&client_secret=${secret}`)
    .then(res => res.json());
};

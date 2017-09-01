import 'whatwg-fetch';

export const fetchPosts = (options = {}) => {
  const includeTag = options.tag ? `%2Btags:[${options.tag}]` : '';
  const filter = `featured:${options.featured}${includeTag}`;

  return fetch(`https://www.policygenius.com/blog/ghost/api/v0.1/posts/?filter=${filter}&limit=${options.limit}&client_id=ghost-frontend&client_secret=8e87db316394`)
    .then(res => res.json());
};

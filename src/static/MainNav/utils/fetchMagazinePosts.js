import 'whatwg-fetch';

export const fetchPosts = (options = {}) => {
  const includeTag = options.tag ? `%2Btags:[${options.tag}]` : '';
  const filter = `featured:${options.featured}${includeTag}`;
  const url = window.GHOST_API_URL || process.env.GHOST_API_URL;
  const secret = window.GHOST_API_CLIENT_SECRET || process.env.GHOST_API_CLIENT_SECRET;

  return fetch(`${url}/blog/ghost/api/v0.1/posts/?filter=${filter}&limit=${options.limit}&client_id=ghost-frontend&client_secret=${secret}`)
    .then(res => res.json());
};

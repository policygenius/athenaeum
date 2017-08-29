import 'whatwg-fetch';

export const fetchPosts = (options = {}) => {
  const includeTag = options.tag ? `,tags:${options.tag}` : '';
  const filter = `featured:${options.featured}${includeTag}`;

  return fetch(`${process.env.GHOST_ENDPOINT}/ghost/api/v0.1/posts/?filter=${filter}&limit=${options.limit}&client_id=ghost-frontend&client_secret=${process.env.GHOST_CLIENT_SECRET}`)
    .then(res => res.json());
};


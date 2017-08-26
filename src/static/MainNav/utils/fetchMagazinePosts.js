export const fetchPosts = (options = {}) => {
  const includeTag = options.tag ? `,tags:${options.tag}` : '';
  const filter = `featured:${options.featured}${includeTag}`;

  return fetch(`http://localhost:2368/ghost/api/v0.1/posts/?filter=${filter}&limit=${options.limit}&client_id=ghost-frontend&client_secret=8d409a652dfe`)
    .then((res) => res.json())
};


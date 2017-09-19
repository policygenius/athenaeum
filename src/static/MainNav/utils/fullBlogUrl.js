const baseUrl = 'https://policygenius.com';

export default function blogUrl(urlFragment = '') {
  const url = window.GHOST_API_URL || process.env.GHOST_API_URL || baseUrl;

  return `${url}/blog${urlFragment}`;
}

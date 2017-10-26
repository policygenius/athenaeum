const baseUrl = 'https://policygenius.com';

const hasKey = (obj, key) => !!(obj && obj[key]);
const hasEnv = key => !!(hasKey(process, 'env') && process.env[key]);

export default function blogUrl(urlFragment = '') {
  let url = baseUrl;

  if (hasEnv('GATSBY_GHOST_API_URL')) url = process.env.GATSBY_GHOST_API_URL;
  if (hasKey(window, 'GATSBY_GHOST_API_URL')) url = window.GATSBY_GHOST_API_URL;

  return `${url}${urlFragment}`;
}

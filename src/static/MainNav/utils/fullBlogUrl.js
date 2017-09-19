const baseUrl = 'https://policygenius.com';

const hasKey = (obj, key) => !!(obj && obj[key]);
const hasEnv = key => !!(hasKey(process, 'env') && process.env[key]);

export default function blogUrl(urlFragment = '') {
  let url = baseUrl;

  if (hasEnv('GHOST_API_URL')) url = process.env.GHOST_API_URL;
  if (hasKey(window, 'GHOST_API_URL')) url = window.GHOST_API_URL;

  return `${url}/blog${urlFragment}`;
}

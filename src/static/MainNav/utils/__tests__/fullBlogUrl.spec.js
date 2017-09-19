import fullBlogUrl from '../fullBlogUrl';

describe('blogUrl() util', () => {

  afterEach(() => {
    delete window.GHOST_API_URL;
  });

  it('returns a blogUrl with `https://policygenius.com` as its default url', () => {
    expect(fullBlogUrl()).toMatch('https://policygenius.com/blog');
  });

  it('returns a blogUrl set by window.GHOST_API_URL as its default url', () => {
    window.GHOST_API_URL = 'https://test.api.url/thing/slug2';

    expect(fullBlogUrl()).toMatch('https://test.api.url/thing/slug2/blog');
  });

  it('returns a blogUrl with `https://policygenius.com` url fragment appended to the url', () => {
    expect(fullBlogUrl('/a-real-url')).toMatch('https://policygenius.com/blog/a-real-url');
  });

  it('returns a blogUrl set by window.GHOST_API_URL and appends a url fragment', () => {
    window.GHOST_API_URL = 'https://test.api.url/thing/slug2';

    expect(fullBlogUrl('/another-url-here')).toMatch('https://test.api.url/thing/slug2/blog/another-url-here');
  });

});

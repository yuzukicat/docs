import { withGuildDocs } from '@theguild/components/next.config';

export default withGuildDocs({
  basePath: '',
  swcMinify: true,
  env: {
    // needs for canonical <link />
    SITE_URL: 'https://kamisu66.com',
  },
  redirects: () =>
    Object.entries({
        '/connected-build': '/',
    }).map(([from, to]) => ({
      source: from,
      destination: to,
      permanent: true,
    })),
  transformPageOpts(pageOpts) {
    return {
      ...pageOpts,
    };
  },
});

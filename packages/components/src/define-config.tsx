import { useRouter } from 'next/router';
import { DocsThemeConfig, Navbar, useConfig } from 'nextra-theme-docs';
import { FooterExtended, Header, mdxComponents } from './components';

export function defineConfig({
  siteName: originalSiteName,
  ...config
}: DocsThemeConfig & { siteName: string }): DocsThemeConfig {
  if (!originalSiteName) {
    throw new Error('Missing required "siteName" property');
  }
  if (!config.docsRepositoryBase) {
    throw new Error('Missing required "docsRepositoryBase" property');
  }

  const url = new URL(config.docsRepositoryBase as string);
  const [, org, repoName] = url.pathname.split('/');

  const siteName = originalSiteName;
  const siteUrl = process.env.SITE_URL;

  return {
    footer: {
      component: <FooterExtended />,
    },
    navbar: {
      component: props => (
        <>
          <Header accentColor="#1cc8ee" searchBarProps={{ version: 'v2' }} />
          <Navbar {...props} />
        </>
      ),
    },
    search: {
      component: null,
    },
    sidebar: {
      defaultMenuCollapseLevel: 1,
      toggleButton: true,
    },
    project: {
      link: `${url.origin}/${org}/${repoName}`, // GitHub link in the navbar
    },
    head: null,
    ...config,
    components: {
      ...mdxComponents,
      ...config.components,
    },
    useNextSeoProps() {
      const { frontMatter, title } = useConfig();
      const { asPath } = useRouter();
      const nextSeoProps = config.useNextSeoProps?.();
      return {
        titleTemplate: `%s – ${siteName}`,
        description: frontMatter.description || `${siteName} Documentation`,
        twitter: {
          cardType: 'summary_large_image',
          site: 'https://kamisu66.com',
          handle: '@Nougatshepard',
        },
        canonical: frontMatter.canonical || (siteUrl && `${siteUrl}${asPath}`),
        openGraph: {
          siteName,
          images: [
            {
              url:
                frontMatter.image ||
                `https://og-image.kamisu66.com/?product=${originalSiteName}&title=${encodeURI(
                  title,
                )}`,
              alt: frontMatter.description || title,
            },
          ],
        },
        ...nextSeoProps,
        additionalMetaTags: [
          { content: siteName, name: 'apple-mobile-web-app-title' },
          { content: siteName, name: 'application-name' },
          ...(nextSeoProps?.additionalMetaTags || []),
        ],
      };
    },
  };
}

export * from './components';
export { defineConfig } from './define-config';
export * from './mermaid';
export { fetchPackageInfo } from './npm';
export * from './types/components';
export { useMounted } from 'nextra/hooks';
export { useMDXComponents } from 'nextra/mdx';
export { RemoteContent, useSSG } from 'nextra/ssg';
export {
  type DocsThemeConfig,
  Bleed,
  Callout,
  Collapse,
  Navbar,
  NotFoundPage,
  ServerSideErrorPage,
  Tab,
  Tabs,
  useConfig,
  useTheme,
  Card,
  Cards,
  Steps,
  FileTree,
} from 'nextra-theme-docs';

declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number | undefined;
  }
}

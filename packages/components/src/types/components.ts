import { ComponentProps, ReactNode } from 'react';
import { ImageProps as IImage } from 'next/image';
import { LinkProps } from 'next/link';
import { ReactPlayerProps } from 'react-player';

interface IVideo {
  src: string;
  placeholder: string;
}

export type ILink = Omit<LinkProps, 'href'> &
  Pick<ComponentProps<'a'>, 'target' | 'rel' | 'title' | 'className' | 'style'> & {
    href: string;
    children: ReactNode;
    newWindow?: boolean;
    sameSite?: boolean;
  };

export type IHeaderLink = ILink & {
  label: string;
  menu?: ReactNode;
};

export interface IHeaderProps {
  className?: string;
  accentColor: string;
  activeLink?: string;
  themeSwitch?: boolean;
  transformLinks?: (links: Omit<IHeaderLink, 'children'>[]) => Omit<IHeaderLink, 'children'>[];
  searchBarProps?: Partial<ISearchBarProps>;
  search?: boolean;
  sameSite?: boolean;
}

export interface IFooterExtendedProps {
  className?: string;
  sameSite?: boolean;
  resources?: ILink[];
  logo?: ILink;
}

export interface IModalProps {
  className?: string;
  children: ReactNode;
  title: string | ReactNode;
  description?: string | ILink;
  image?: IImage;
  visible: boolean;
  placement: 'top' | 'center' | 'bottom';
  onCancel: (state?: boolean) => void;
}

export interface ISearchBarProps {
  version?: 'v1' | 'v2';
  algolia?: {
    appId: string;
    searchApiKey: string;
    indexName: string;
  };
  accentColor: string;
  title: string;
  placeholder: string;
  isFull?: boolean;
  onHandleModal?: (state: boolean) => void;
  className?: string;
}

export interface IInfoListProps {
  className?: string;
  title?: string | ReactNode;
  items: {
    title: string | ReactNode;
    description: string | ReactNode;
    link?: ILink;
  }[];
}

export interface IHeroVideoProps {
  className?: string;
  title: string | ReactNode;
  description: string | ReactNode;
  flipped?: boolean;
  link?: ILink;
  video: IVideo;
  videoProps?: ReactPlayerProps;
}

export interface ISchemaPageProps {
  schemaName: string;
  tags?: string[];
}

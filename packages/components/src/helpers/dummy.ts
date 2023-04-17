import { CardsColorfulProps } from '../components/cards-colorful';
import {
  IHeroVideoProps,
  IInfoListProps,
} from '../types/components';

export const dummyInfoList: IInfoListProps = {
  title: 'Get Started',
  items: [
    {
      title: 'Install GraphQL Envelop',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas euismod amet duis quisque semper.',
      link: {
        children: 'Documentation',
        title: 'Read the documentation',
        href: '#',
      },
    },
    {
      title: 'GitHub integration',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas euismod amet duis quisque semper.',
      link: {
        children: 'GitHub',
        title: 'View the code',
        href: 'https://github.com/dotansimha/envelop',
      },
    },
    {
      title: "Let's work together",
      description: 'We want to hear from you, our community of fellow engineers.',
      link: {
        children: 'envelop@theguild.dev',
        title: 'Reach us out',
        href: 'mailto:envelop@theguild.dev',
      },
    },
  ],
};

export const dummyHeroVideo: IHeroVideoProps = {
  title: 'Easy Installation',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque mauris imperdiet nulla vehicula, vitae porttitor massa consequat. Proin semper bibendum aliquam.',
  link: {
    children: 'Documentation',
    title: 'Read the documentation',
    href: '#',
  },
  video: {
    src: 'https://youtube.com/watch?v=dQw4w9WgXcQ',
    placeholder: 'https://ak.picdn.net/shutterstock/videos/1033186691/thumb/1.jpg',
  },
  flipped: true,
};

export const dummyCardsColorful: CardsColorfulProps = {
  cards: [
    {
      title: 'GraphQL Modules',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      category: 'New release by the guild',
      link: {
        title: 'Learn more',
        href: '#',
      },
      color: '#3547e5',
    },
    {
      title: 'Clean up your code!',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      category: 'Pro tip',
      link: {
        title: 'Learn more',
        href: '#',
      },
      color: '#0b0d11',
    },
  ],
};

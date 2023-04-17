import {  HeroVideo, InfoList } from '@theguild/components';

export function IndexPage() {
  return (
    <>
      <HeroVideo
        flipped
        title="Simple Video"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis ante at ex interdum tincidunt vitae quis justo."
        video={{
          src: 'https://youtube.com/watch?v=dQw4w9WgXcQ',
          placeholder: '/video-placeholder.webp',
        }}
      />
      <InfoList
        title="Short List"
        items={[
          {
            title: 'Install',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis ante at ex interdum tincidunt vitae quis justo.',
          },
          {
            title: 'Integrate',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis ante at ex interdum tincidunt vitae quis justo.',
          },
          {
            title: 'Profit',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis ante at ex interdum tincidunt vitae quis justo.',
          },
        ]}
      />
    </>
  );
}

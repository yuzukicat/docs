import { ReactElement } from 'react';
import { AutocompleteComponents } from '@algolia/autocomplete-js';
import { AlgoliaSearchItem } from '../../types/algolia';

export const SidePreview = ({
  item,
  components: { Highlight, Snippet },
  accentColor,
}: {
  item: AlgoliaSearchItem;
  components: AutocompleteComponents;
  accentColor: string;
}): ReactElement | null => {
  if (!item) {
    return null;
  }
  return (
    <div
      className="flex h-[600px] select-text flex-col overflow-y-auto p-10"
      style={{ '--accentColor': accentColor }}
    >
      <h3
        className="
          mt-0
          mb-3
          w-full
          text-center
          text-2xl
          font-light
          text-black
          dark:text-gray-400
          [&>mark]:bg-transparent
          [&>mark]:font-semibold
          [&>mark]:[color:var(--accentColor)]
        "
      >
        <Highlight hit={item} attribute="title" />
      </h3>
      <p className="mt-0 mb-6 w-full text-center text-base font-light text-gray-600 dark:text-gray-400">
        {item.hierarchy.slice(1).join(' > ')}
      </p>
      <p className="text-center text-center text-sm font-light text-black dark:text-gray-400">
        <Snippet hit={item} attribute="content" />
      </p>
      {item.toc.length > 1 && (
        <>
          <h4 className="mt-10 mb-1 w-full text-lg font-light text-gray-600 dark:text-gray-400">
            Table of content:
          </h4>
          <ol className="text-left text-base font-light text-gray-600 dark:text-gray-400">
            {item.toc.map(tocItem => (
              <li key={tocItem.title}>{tocItem.title}</li>
            ))}
          </ol>
        </>
      )}
      <button className="mb-5 mt-8 text-center text-center text-lg font-light text-black dark:text-gray-400">
        Press "Enter" to open {item.type} →
      </button>
    </div>
  );
};

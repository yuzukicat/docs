import { ReactElement } from 'react';
import clsx from 'clsx';
import { IFooterExtendedProps } from '../types/components';

export const FooterExtended = ({
  className,
}: IFooterExtendedProps): ReactElement => {
  return (
    <footer className={clsx('bg-white text-xs dark:bg-[#111]', className)}>
      <div className="container max-w-[90rem] border-t border-gray-300 dark:border-gray-800">
        <div className="my-8 flex flex-col gap-6 pt-2 pb-4 lg:flex-row items-center sm:items-start">
          <div className="flex w-full flex-row gap-6">
          <p className="text-pink-500 dark:text-gray-200 mt-6 text-xs">© {new Date().getFullYear()} Yuzuki.Cat</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

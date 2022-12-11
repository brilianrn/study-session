import React, { FC, useMemo } from 'react';
import { TabProps } from './index.type';

const Tab: FC<TabProps> = ({ menus }) => {
  return (
    <React.Fragment>
      <div className="text-sm font-medium text-center text-gray-500 border-b border-[#DFE5EE] dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px">
          {menus?.length &&
            menus?.map((e, i) => {
              return (
                <li className="mr-2" key={`${e?.id}-${i}`}>
                  <p
                    className={`${
                      e?.active
                        ? 'text-[#6F32D2] border-[#6F32D2] active dark:text-blue-500 dark:border-blue-500'
                        : 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 hover:cursor-pointer'
                    } inline-block p-4 rounded-t-lg border-b-2 text-[16px]`}
                    aria-current="page"
                  >
                    {e?.title}
                  </p>
                </li>
              );
            })}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Tab;

import React, { FC } from 'react';
import { Popover } from '@headlessui/react';
import '@szhsin/react-menu/dist/index.css';
import { Fragment } from 'react';
import { IconThreeDots } from '../../assets/images';

interface ButtonMenuProps {
  onClick: () => void;
}

const ButtonMenu: FC<ButtonMenuProps> = ({ onClick }) => {
  return (
    <React.Fragment>
      <Popover className="relative">
        <Popover.Button className="px-[12px] py-[15px] bg-[#F6F8FC] rounded-[8px] hover:cursor-pointer hover:opacity-[0.5">
          <img src={IconThreeDots} alt="icon" />
        </Popover.Button>
        <Popover.Panel className="absolute z-10 top-100 right-0 min-w-[200px] rounded-md bg-white shadow-md overflow-hidden">
          <Fragment>
            <button
              onClick={onClick}
              className="py-3 px-4 text-sub2 text-base-900 border-base-200 last:border-none w-full text-left hover:bg-base-200 hover:bg-[#F6F8FC]"
            >
              Hapus
            </button>
          </Fragment>
        </Popover.Panel>
      </Popover>
    </React.Fragment>
  );
};

export default ButtonMenu;

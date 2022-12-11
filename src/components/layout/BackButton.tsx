import React, { FC } from 'react';
import { IconArrowGray, IconBarrier } from '../../assets/images';
import { BackButtonProps } from './index.type';

const BackButton: FC<BackButtonProps> = ({ title }) => {
  return (
    <React.Fragment>
      <div className="flex">
        <img
          src={IconArrowGray}
          alt="icon"
          className="flex my-auto hover:cursor-pointer hover:opacity-[0.5]"
        />
        <img src={IconBarrier} alt="icon" className="flex my-auto mx-[24px]" />
        <p className="flex my-auto font-bold text-lg">{title}</p>
      </div>
    </React.Fragment>
  );
};

export default BackButton;

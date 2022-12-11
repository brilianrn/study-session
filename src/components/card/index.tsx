import React, { FC, ReactNode } from 'react';

import { IconCross } from '../../assets/images';
import './style.css';

interface CardProps {
  border?: boolean;
  children?: ReactNode;
  centeredContent?: boolean;
  fullWidth?: boolean;
  noMargin?: boolean;
}

interface CardHeaderProps extends CardProps {
  noSeparator?: boolean;
  onClose: () => void;
}

interface CardFooterProps extends CardProps {
  btnPositions?: 'start' | 'center' | 'end';
  customClass?: string;
}

const CardHeader: FC<CardHeaderProps> = ({
  children,
  noSeparator,
  onClose,
}) => {
  return (
    <header className={noSeparator ? 'header-without-separator' : 'header'}>
      <div className="grid grid-cols-12">
        <div className="col-span-1" />
        <div className="text-center col-span-10">{children}</div>
        <div className="w-full col-span-1">
          <img
            src={IconCross}
            onClick={onClose}
            className="float-right cursor-pointer"
            alt="Close Button Hijab Meezha"
          />
        </div>
      </div>
      <hr className="hr" />
    </header>
  );
};

const Card = ({ children }: CardProps) => {
  return (
    <React.Fragment>
      <div className={`wrapper`}>{children}</div>
    </React.Fragment>
  );
};

const CardFooter: FC<CardFooterProps> = ({
  children,
  btnPositions,
  customClass,
}) => {
  return (
    <footer
      className={`${
        btnPositions === 'start'
          ? 'flex justify-start'
          : btnPositions === 'center'
          ? 'flex justify-center'
          : 'flex justify-end'
      } ${customClass}`}
    >
      {children}
    </footer>
  );
};

Card.Header = CardHeader;
Card.Footer = CardFooter;

export default Card;

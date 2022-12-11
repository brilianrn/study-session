import React, { FC, useMemo } from 'react';
import { ButtonProps } from './index.type';

const ButtonFilled: FC<ButtonProps> = ({
  title = 'Button',
  type = 'primary',
  disabled = false,
  icon,
  className,
  iconClassName,
  iconPosition,
  onClick,
}) => {
  const customType = useMemo(() => {
    switch (type) {
      case 'primary':
        return 'bg-[#6F32D2] hover:bg-blue-700 text-white';
    }
  }, [type]);
  return (
    <React.Fragment>
      <button
        disabled={disabled}
        className={`${className} ${customType} ${
          disabled ? 'opacity-50 cursor-not-allowed' : ''
        } py-2 px-4 rounded-lg inline-flex items-center`}
        onClick={onClick}
      >
        {iconPosition === 'left' && icon && (
          <img
            src={icon}
            alt="icon"
            className={`${iconClassName || 'h-3 w-5'}`}
          />
        )}
        {title && <label className="mx-1 hover:cursor-pointer">{title}</label>}
        {iconPosition === 'right' && icon && (
          <img
            src={icon}
            alt="icon"
            className={`${iconClassName || 'h-3 w-5'}`}
          />
        )}
      </button>
    </React.Fragment>
  );
};

export default ButtonFilled;

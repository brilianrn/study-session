import React, { FC, useMemo } from 'react';
import { ButtonProps } from './index.type';

const ButtonOutline: FC<ButtonProps> = ({
  title = 'Button',
  type = 'primary',
  disabled = false,
  className,
  icon,
  iconPosition = 'right',
  iconClassName,
  onClick,
}) => {
  const customType = useMemo(() => {
    switch (type) {
      case 'primary':
        return 'hover:bg-[#6F32D2] text-[#6F32D2] hover:text-white border-[#6F32D2]';
    }
  }, [type]);
  return (
    <React.Fragment>
      <button
        disabled={disabled}
        className={`${className} ${customType} ${
          disabled ? 'opacity-50 cursor-not-allowed' : ''
        } bg-transparent hover:border-transparent rounded-lg py-2 px-4 border inline-flex items-center`}
        onClick={onClick}
      >
        {iconPosition === 'left' && icon && (
          <img
            src={icon}
            alt="icon"
            className={`${iconClassName || 'h-3 w-5'}`}
          />
        )}
        <label className="mx-1 hover:cursor-pointer">{title}</label>
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

export default ButtonOutline;

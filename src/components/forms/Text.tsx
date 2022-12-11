import React, { FC } from 'react';

interface TextProps {
  label: string;
  placeholder?: string;
  value: string;
  setValue: (value: string) => void;
  type: string;
}

const Text: FC<TextProps> = ({ label, setValue, value, placeholder, type }) => {
  return (
    <React.Fragment>
      <div>
        <div className="mb-3 text-left">
          <label className="text-left text-medium text-gray-600">{label}</label>
        </div>
        <input
          type={type || 'text'}
          value={value}
          onChange={({ target }) => setValue(target.value)}
          className="w-full p-4 text-gray-700 border border-gray-500 focus:border-2 focus:border-gray-700 rounded-xl outline-none transition duration-150 ease-in-out mb-4"
          placeholder={placeholder}
        />
      </div>
    </React.Fragment>
  );
};

export default Text;

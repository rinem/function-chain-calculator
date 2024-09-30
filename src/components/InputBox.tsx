import React from 'react';

interface InputBoxProps {
  value: string;
  onChange: (value: string) => void;
}

const InputBox: React.FC<InputBoxProps> = ({ value, onChange }) => (
  <div className="relative flex flex-col items-center">
    <div className="mb-2 bg-orange-100 text-orange-800 text-xs font-medium px-2 py-0.5 rounded">
      Initial value of x
    </div>
    <div className="flex items-center border border-orange-500 rounded-lg overflow-hidden w-32 h-12">
      <input
        type="text"
        value={value}
        onChange={(e) => {
          const input = e.target.value;
          if (input === '' || !isNaN(Number(input))) {
            onChange(input);
          }
        }}
        className="w-1/2 h-full font-bold text-center focus:outline-none"
      />
      <div className="w-1/2 h-full bg-white border-l border-gray-300"></div>
    </div>
  </div>
);

export default InputBox;

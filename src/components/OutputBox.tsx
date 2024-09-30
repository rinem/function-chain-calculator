import React from 'react';

interface OutputBoxProps {
  value: string;
}

const OutputBox: React.FC<OutputBoxProps> = ({ value }) => (
  <div className="relative flex flex-col items-center">
    <div className="mb-2 bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded">
      Final Output y
    </div>
    <div className="flex items-center border border-green-500 rounded-lg overflow-hidden w-28 h-12">
      <div className="w-1/2 h-full border-r bg-white border-gray-300"></div>
      <input
        type="text"
        value={value}
        readOnly
        className="w-1/2 h-full font-bold text-center focus:outline-none"
      />
    </div>
  </div>
);

export default OutputBox;

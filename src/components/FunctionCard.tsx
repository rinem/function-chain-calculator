import React from 'react';
import { ChevronDownIcon, FunctionSquareIcon } from 'lucide-react';

interface FunctionCardProps {
  number: number;
  equation: string;
  onEquationChange: (equation: string) => void;
  nextFunction: string;
}

const FunctionCard: React.FC<FunctionCardProps> = ({ number, equation, onEquationChange, nextFunction }) => (
  <div className="bg-white rounded-lg shadow-md p-4 w-full">
    <div className="flex items-center mb-4">
      <FunctionSquareIcon className="w-5 h-5 text-gray-400 mr-2" />
      <h3 className="text-gray-500 font-medium">Function: {number}</h3>
    </div>
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">Equation</label>
      <input
        type="text"
        value={equation}
        onChange={(e) => onEquationChange(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Next function</label>
      <div className="relative">
        <select
          disabled
          className="w-full p-2 border border-gray-300 rounded-md appearance-none bg-gray-100 text-gray-500 focus:outline-none"
        >
          <option>{nextFunction}</option>
        </select>
        <ChevronDownIcon className="w-5 h-5 text-gray-400 absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none" />
      </div>
    </div>
    <div className="flex justify-between mt-4">
      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
    </div>
    <div className="flex justify-between mt-1">
      <span className="text-xs text-gray-500">input</span>
      <span className="text-xs text-gray-500">output</span>
    </div>
  </div>
);

export default FunctionCard;

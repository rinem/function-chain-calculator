import { useState, useEffect } from 'react';
import InputBox from './InputBox';
import OutputBox from './OutputBox';
import FunctionCard from './FunctionCard';
import ErrorMessage from './ErrorMessage';

interface FunctionType {
  order: number;
  equation: string;
}

const initialFunctions: FunctionType[] = [
  { order: 0, equation: 'x^2' },
  { order: 1, equation: '2*x + 4' },
  { order: 2, equation: 'x^2 + 20' },
  { order: 3, equation: 'x - 2' },
  { order: 4, equation: 'x / 2' },
];

const Board = () => {
  const [initialValue, setInitialValue] = useState<string>('');
  const [functions, setFunctions] = useState<FunctionType[]>(initialFunctions);
  const [finalOutput, setFinalOutput] = useState<string>('0');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const executionOrder = [0, 1, 3, 4, 2];

  useEffect(() => {
    if (initialValue === '') {
      setFinalOutput('0');
      return;
    }

    let output = parseFloat(initialValue);
    setErrorMessage('');

    try {
      for (const index of executionOrder) {
        const fn = functions[index];
        output = applyEquation(output, fn.equation);
      }
      setFinalOutput(Number.isInteger(output) ? output.toString() : output.toFixed(3));
    } catch (err: any) {
      setErrorMessage(err.message);
    }
  }, [initialValue, functions]);

  const applyEquation = (x: number, equation: string): number => {
    const formattedEquation = equation.replace(/\^/g, '**').replace(/x/g, `(${x})`);
    return eval(formattedEquation); // Caution with eval
  };

  const updateEquation = (order: number, newEquation: string) => {
    const updatedFunctions = functions.map((fn) =>
      fn.order === order ? { ...fn, equation: newEquation } : fn
    );
    setFunctions(updatedFunctions);
  };

  const getNextFunctionLabel = (currentOrder: number) => {
    const currentIndex = executionOrder.indexOf(currentOrder);
    const nextIndex = currentIndex + 1;
    return nextIndex < executionOrder.length ? `Function: ${executionOrder[nextIndex] + 1}` : '-';
  };

  return (
    <div className="p-4 w-full flex justify-center items-center h-screen">
      <div className="w-1/4 p-4 flex justify-center">
        <InputBox value={initialValue} onChange={setInitialValue} />
      </div>

      <div className="w-2/4 p-4 flex flex-col justify-center">
        <div className="flex justify-between gap-4 mb-4">
          {initialFunctions.slice(0, 3).map(({ order }) => (
            <FunctionCard
              key={order}
              number={order + 1}
              equation={functions[order].equation}
              onEquationChange={(newEq) => updateEquation(order, newEq)}
              nextFunction={getNextFunctionLabel(order)}
            />
          ))}
        </div>

        <div className="flex justify-start gap-4">
          {initialFunctions.slice(3, 5).map(({ order }) => (
            <FunctionCard
              key={order}
              number={order + 1}
              equation={functions[order].equation}
              onEquationChange={(newEq) => updateEquation(order, newEq)}
              nextFunction={getNextFunctionLabel(order)}
            />
          ))}
        </div>
      </div>

      <div className="w-1/4 p-4 flex justify-center">
        <OutputBox value={finalOutput} />
      </div>

      {errorMessage && <ErrorMessage message={errorMessage} />}
    </div>
  );
};

export default Board;

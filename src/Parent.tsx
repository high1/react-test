import { useState } from 'react';
import { Child } from 'Child';

export const Parent = () => {
  const [counter, setCounter] = useState(0);

  const increase = () => setCounter((cnt) => cnt + 1);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <div className="text-6xl text-sky-500">{counter}</div>
      <Child increase={increase} />
    </div>
  );
};

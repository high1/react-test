type ChildProps = {
  increase: () => void;
};

export const Child = ({ increase }: ChildProps) => {
  console.log('child render');
  return <button onClick={increase}>Increase</button>;
};

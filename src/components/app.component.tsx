import { useState } from 'react';
import { Button } from '../shared/components/ui/button.tsx';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className='text-7xl'>Hello World!</h1>
      <Button>Click me</Button>
    </>
  );
};

export {
  App,
};

import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className='text-7xl'>Hello World!</h1>
    </>
  );
};

export {
  App,
};

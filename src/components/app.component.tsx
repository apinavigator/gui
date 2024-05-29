import { useState } from 'react';
import { Menu, Search } from 'lucide-react';
import { Button } from '../shared/components/ui/button.tsx';
import { CommandShortcut } from '../shared/components/ui/command.tsx';
import { Subject } from './subject.tsx';
import { JAVASCRIPT } from './javascript.db';


const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Navigation  */}
      <nav className='flex justify-center items-center p-4 border-solid border-slate-200 border-b'>

        <img src='app-logos/javascript.png' alt='JavaScript' className='w-7' />

        <h1 className='text-2xl ml-3 max-w-full break-normal text-ellipsis overflow-hidden'>javascript</h1>

        <span className='flex-1'></span>

        <Button variant="ghost" size='icon' className='flex-shrink-0 sm:hidden'><Search/></Button>
        <Button variant="outline" className='text-slate-400 mr-2 hidden sm:flex'>
          <Search/>
          <span className='mr-12'>Quick search...</span>
          <CommandShortcut>Ctrl+K</CommandShortcut>
        </Button>


        <Button variant="ghost" size='icon' className='flex-shrink-0'><Menu/></Button>
      </nav>

      {/* Content */}
      <main className='p-0 sm:p-4 lg:p-5'>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>

          {JAVASCRIPT.map((subject, index) => <Subject key={index} subject={subject} />)}

        </div>

      </main>
    </>
  );
};

export {
  App,
};

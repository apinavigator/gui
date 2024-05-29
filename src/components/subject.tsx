import { useState } from 'react';
import { Button } from '../shared/components/ui/button.tsx';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../shared/components/ui/card.tsx';
import { ISubject } from './types';
import { Topic } from './topic.tsx';



const Subject = ({ subject }: { subject: ISubject }) => {
  const [expanded, setExpanded] = useState(true);


  return (
    <article className='p-3 border-solid border-slate-100 border-b last:border-b-none sm:last:border sm:border'>
      <h3 className='text-2xl font-semibold'>{subject.name}</h3>
      <div className='grid grid-cols-2 gap-4'>
          {subject.topics.map((topic, index) => <Topic key={index} topic={topic} />)}
        </div>
    </article>
  );
};



export {
  Subject,
};

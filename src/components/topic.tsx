import { Button } from '../shared/components/ui/button.tsx';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '../shared/components/ui/hover-card.tsx';
import { ITopic } from './types';


const Topic = ({ topic }: { topic: ITopic }) => (
  <HoverCard>
    <HoverCardTrigger asChild>
      <Button variant="link" className='justify-start m-0 p-0'>
        <span className='text-slate-500 text-sm tracking-widest text-ellipsis overflow-hidden'>{topic.name}</span>
      </Button>
    </HoverCardTrigger>
    <HoverCardContent className="w-64 sm:w-96">
      <h4 className="text-md font-semibold tracking-widest text-ellipsis overflow-hidden">{topic.name}</h4>
      <div className='text-sm text-slate-700 mt-2'>
        <p>
          The React Framework – created and maintained by @vercel.
        </p>
      </div>
    </HoverCardContent>
  </HoverCard>
);


export {
  Topic,
};

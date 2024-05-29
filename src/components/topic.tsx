import { Button } from '../shared/components/ui/button.tsx';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '../shared/components/ui/hover-card.tsx';
import { ITopicContentItem, ITopic } from './types';


const TopicContentItem = ({ item }: { item: ITopicContentItem }) => {
  if (item.kind === 'text') {
    return <p>{item.value}</p>;
  }
};


const TopicContent = ({ items }: { items: ITopicContentItem[] }) => (
  items.map((item, index) => <TopicContentItem key={index} item={item} />)
);



const Topic = ({ topic, longName }: { topic: ITopic, longName?: boolean }) => (
  <HoverCard>
    <HoverCardTrigger asChild>
      <Button variant="link" className='justify-start m-0 p-0'>
        <span className='text-slate-500 text-sm tracking-widest text-ellipsis overflow-hidden'>
          {longName && topic.longName ? topic.longName : topic.name}
        </span>
      </Button>
    </HoverCardTrigger>
    <HoverCardContent className="w-64 sm:w-96">
      <h4 className="text-md font-semibold tracking-widest text-ellipsis overflow-hidden">
        {topic.longName || topic.name}
      </h4>
      <div className='text-sm text-slate-700 mt-2'>
        <TopicContent items={topic.content} />
      </div>
    </HoverCardContent>
  </HoverCard>
);


export {
  Topic,
};

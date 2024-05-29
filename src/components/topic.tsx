import { FlaskConical } from 'lucide-react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import javascript from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import typescript from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript';
import html from 'react-syntax-highlighter/dist/esm/languages/hljs/htmlbars';
import css from 'react-syntax-highlighter/dist/esm/languages/hljs/css';
import a11yLight from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-light';
import a11yDark from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark';
import { Button } from '../shared/components/ui/button.tsx';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '../shared/components/ui/hover-card.tsx';
import { ITopicContentItem, ITopic } from './types';

SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('html', html);
SyntaxHighlighter.registerLanguage('css', css);

const TopicContentItem = ({ item }: { item: ITopicContentItem }) => {
  if (item.kind === 'text') {
    return <p>{item.value}</p>;
  }
  return (
    <SyntaxHighlighter language={item.kind} style={a11yLight}>
      {item.value}
    </SyntaxHighlighter>
  );
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
        {topic.experimental && <FlaskConical size={16} />}
      </Button>
    </HoverCardTrigger>
    <HoverCardContent className="w-72 sm:w-96 lg:w-[500px] max-h-80 sm:max-h-96 lg:max-h-[500px] overflow-auto">
      <h4 className="text-md font-semibold tracking-widest text-ellipsis overflow-hidden">
        {topic.longName || topic.name}
      </h4>
      <div className='topic-container'>
        <TopicContent items={topic.content} />
      </div>
    </HoverCardContent>
  </HoverCard>
);


export {
  Topic,
};

import { FlaskConical } from 'lucide-react';

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import bash from 'react-syntax-highlighter/dist/esm/languages/hljs/bash';
import cmake from 'react-syntax-highlighter/dist/esm/languages/hljs/cmake';
import csharp from 'react-syntax-highlighter/dist/esm/languages/hljs/csharp';
import css from 'react-syntax-highlighter/dist/esm/languages/hljs/css';
import dart from 'react-syntax-highlighter/dist/esm/languages/hljs/dart';
import django from 'react-syntax-highlighter/dist/esm/languages/hljs/django';
import dockerfile from 'react-syntax-highlighter/dist/esm/languages/hljs/dockerfile';
import go from 'react-syntax-highlighter/dist/esm/languages/hljs/go';
import haskell from 'react-syntax-highlighter/dist/esm/languages/hljs/haskell';
import html from 'react-syntax-highlighter/dist/esm/languages/hljs/htmlbars';
import http from 'react-syntax-highlighter/dist/esm/languages/hljs/http';
import java from 'react-syntax-highlighter/dist/esm/languages/hljs/java';
import javascript from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import json from 'react-syntax-highlighter/dist/esm/languages/hljs/json';
import latex from 'react-syntax-highlighter/dist/esm/languages/hljs/latex';
import makefile from 'react-syntax-highlighter/dist/esm/languages/hljs/makefile';
import markdown from 'react-syntax-highlighter/dist/esm/languages/hljs/markdown';
import nginx from 'react-syntax-highlighter/dist/esm/languages/hljs/nginx';
import perl from 'react-syntax-highlighter/dist/esm/languages/hljs/perl';
import pgsql from 'react-syntax-highlighter/dist/esm/languages/hljs/pgsql';
import php from 'react-syntax-highlighter/dist/esm/languages/hljs/php';
import plaintext from 'react-syntax-highlighter/dist/esm/languages/hljs/plaintext';
import powershell from 'react-syntax-highlighter/dist/esm/languages/hljs/powershell';
import python from 'react-syntax-highlighter/dist/esm/languages/hljs/python';
import ruby from 'react-syntax-highlighter/dist/esm/languages/hljs/ruby';
import rust from 'react-syntax-highlighter/dist/esm/languages/hljs/rust';
import scss from 'react-syntax-highlighter/dist/esm/languages/hljs/scss';
import shell from 'react-syntax-highlighter/dist/esm/languages/hljs/shell';
import sql from 'react-syntax-highlighter/dist/esm/languages/hljs/sql';
import sql_more from 'react-syntax-highlighter/dist/esm/languages/hljs/sql_more';
import typescript from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript';
import xml from 'react-syntax-highlighter/dist/esm/languages/hljs/xml';
import yaml from 'react-syntax-highlighter/dist/esm/languages/hljs/yaml';

import a11yLight from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-light';
import a11yDark from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark';

import { Button } from '../shared/components/ui/button.tsx';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '../shared/components/ui/hover-card.tsx';
import { ITopicContentItem, ITopic } from './types';

SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('cmake', cmake);
SyntaxHighlighter.registerLanguage('csharp', csharp);
SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('dart', dart);
SyntaxHighlighter.registerLanguage('django', django);
SyntaxHighlighter.registerLanguage('dockerfile', dockerfile);
SyntaxHighlighter.registerLanguage('go', go);
SyntaxHighlighter.registerLanguage('haskell', haskell);
SyntaxHighlighter.registerLanguage('html', html);
SyntaxHighlighter.registerLanguage('http', http);
SyntaxHighlighter.registerLanguage('java', java);
SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('json', json);
SyntaxHighlighter.registerLanguage('latex', latex);
SyntaxHighlighter.registerLanguage('makefile', makefile);
SyntaxHighlighter.registerLanguage('markdown', markdown);
SyntaxHighlighter.registerLanguage('nginx', nginx);
SyntaxHighlighter.registerLanguage('perl', perl);
SyntaxHighlighter.registerLanguage('pgsql', pgsql);
SyntaxHighlighter.registerLanguage('php', php);
SyntaxHighlighter.registerLanguage('plaintext', plaintext);
SyntaxHighlighter.registerLanguage('powershell', powershell);
SyntaxHighlighter.registerLanguage('python', python);
SyntaxHighlighter.registerLanguage('ruby', ruby);
SyntaxHighlighter.registerLanguage('rust', rust);
SyntaxHighlighter.registerLanguage('scss', scss);
SyntaxHighlighter.registerLanguage('shell', shell);
SyntaxHighlighter.registerLanguage('sql', sql);
SyntaxHighlighter.registerLanguage('sql_more', sql_more);
SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('xml', xml);
SyntaxHighlighter.registerLanguage('yaml', yaml);

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

import { ISubject } from './types';



const JAVASCRIPT: ISubject[] = [
  {
    name: 'Fundamentals',
    topics: [
      {
        name: 'Data Types & Structures',
        description: '',
        content: [
          { value: 'JavaScript is a dynamic language with dynamic types. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:' },
          {
            kind: 'javascript',
            value: `let foo = 42; // foo is now a number
            foo = "bar"; // foo is now a string
            foo = true; // foo is now a boolean`,
          },
        ],
      },
      {
        name: 'function',
        description: '',
        content: [
          { value: 'The function declaration creates a binding of a new function to a given name.' },
          {
            kind: 'javascript',
            value: `function calcRectArea(width, height) {
              return width * height;
            }
            
            console.log(calcRectArea(5, 6));
            // Expected output: 30`,
          },
        ],
      },
      {
        name: 'Conditionals',
        description: '',
        content: [
          { value: 'The function declaration creates a binding of a new function to a given name.' },
        ],
      },
      {
        name: 'Loops',
        description: '',
        content: [
          { value: 'The function declaration creates a binding of a new function to a given name.' },
        ],
      },
      {
        name: 'Error Instances',
        description: '',
        content: [
          { value: 'The function declaration creates a binding of a new function to a given name.' },
        ],
      },
    ],
  },
  {
    name: 'String',
    topics: [
      {
        name: 'length',
        description: '',
        content: [
          { value: 'A non-negative integer. Reflects the length of the string. Read-only.' },
          {
            kind: 'javascript',
            value: '\'Life, the universe and everything. Answer:\'.length // 42',
          },
        ],
      },
      {
        name: 'at(index)',
        description: '',
        content: [
          { value: 'The function declaration creates a binding of a new function to a given name.' },
        ],
      },
      {
        name: 'charAt(index)',
        description: '',
        content: [
          { value: 'The function declaration creates a binding of a new function to a given name.' },
        ],
      },
      {
        name: 'charCodeAt(index)',
        description: '',
        content: [
          { value: 'The function declaration creates a binding of a new function to a given name.' },
        ],
      },
      {
        name: 'concat(str1, str2?, /* …, */ strN?)',
        description: '',
        content: [
          { value: 'The function declaration creates a binding of a new function to a given name.' },
        ],
      },
      {
        name: 'endsWith(searchString, endPosition?)',
        description: '',
        content: [
          { value: 'The function declaration creates a binding of a new function to a given name.' },
        ],
      },
      {
        name: 'includes(searchString, startPosition?)',
        description: '',
        content: [
          { value: 'The function declaration creates a binding of a new function to a given name.' },
        ],
      },
      {
        name: 'indexOf(searchString, startPosition?)',
        description: '',
        content: [
          { value: 'The function declaration creates a binding of a new function to a given name.' },
        ],
      },
      {
        name: 'lastIndexOf(searchString, endPosition?)',
        description: '',
        content: [
          { value: 'The function declaration creates a binding of a new function to a given name.' },
        ],
      },
      {
        name: 'localeCompare(compareString, locales?, options?)',
        description: '',
        content: [
          { value: 'The function declaration creates a binding of a new function to a given name.' },
        ],
      },
      {
        name: 'match(regexp)',
        description: '',
        content: [
          { value: 'The function declaration creates a binding of a new function to a given name.' },
        ],
      },
      {
        name: 'matchAll(regexp)',
        description: '',
        content: [
          { value: 'The function declaration creates a binding of a new function to a given name.' },
        ],
      },
      {
        name: 'padEnd(targetLength, padString?)',
        description: '',
        content: [
          { value: 'The function declaration creates a binding of a new function to a given name.' },
        ],
      },
      {
        name: 'padStart(targetLength, padString?)',
        description: '',
        content: [
          { value: 'The function declaration creates a binding of a new function to a given name.' },
        ],
      },
    ],
  },
];


export {
  JAVASCRIPT,
};

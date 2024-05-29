



/* ************************************************************************************************
 *                                             TYPES                                              *
 ************************************************************************************************ */

type ITopicContentItemKind = 'text' | string;

interface ITopicContentItem {
  kind: ITopicContentItemKind,
  value: string
}

interface ITopic {
  name: string;
  longName?: string;
  description: string;
  content: ITopicContentItem[],
  sources: string[]
}


interface ISubject {
  name: string,
  topics: ITopic[]
}





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export type {
  ITopicContentItem,
  ITopic,
  ISubject,
};

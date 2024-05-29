



/* ************************************************************************************************
 *                                             TYPES                                              *
 ************************************************************************************************ */

type ITopicContentItemKind = 'text' | string;

interface ITopicContentItem {
  kind?: ITopicContentItemKind,
  value: string
}

interface ITopic {
  name: string;
  description: string;
  content: ITopicContentItem[]
}


interface ISubject {
  name: string,
  topics: ITopic[]
}





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export type {
  ITopic,
  ISubject,
};

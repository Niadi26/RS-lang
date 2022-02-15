export interface IUserWord {
  id: string;
  wordId: string;
  difficulty?: string;
  optional?: {
    learned: boolean,
    difficult: boolean,
    group: string | number,
    page: string | number,
  };
}

export type UserWords = IUserWord[];

export interface IUserWord {
  id: string;
  wordId: string;
  difficulty: string;
  optional: {
    learned: boolean,
    difficult: boolean,
    group: string | number,
    page: string | number,
  };
}

export type UserWords = IUserWord[];

// eslint-disable-next-line @typescript-eslint/naming-convention
export type flags = 'learned' | 'difficult';

export interface Iflags {
  learned: flags;
  difficult: flags;
}

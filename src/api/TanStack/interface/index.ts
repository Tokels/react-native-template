export interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

export interface Token {
  accessToken: string;
  expires: number;
}

export const tokenInit: Token = {
  accessToken: '',
  expires: NaN,
};

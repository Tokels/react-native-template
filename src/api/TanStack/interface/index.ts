export interface Token {
  accessToken: string;
  expires: number;
}

export const tokenInit: Token = {
  accessToken: '',
  expires: NaN,
};

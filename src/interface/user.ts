import type { Result } from './common';

export interface User extends Result {
  userName: string;
  token: string;
}

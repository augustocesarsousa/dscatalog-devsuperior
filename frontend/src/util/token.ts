import jwtDecode from 'jwt-decode';
import { Role } from 'types/role';
import { getAuthdata } from './storage';

export type TokenData = {
  exp: number;
  user_name: string;
  authorities: Role[];
};

export const getTokenData = (): TokenData | undefined => {
  try {
    return jwtDecode(getAuthdata().access_token) as TokenData;
  } catch (error) {
    return undefined;
  }
};

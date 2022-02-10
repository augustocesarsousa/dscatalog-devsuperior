import jwtDecode from 'jwt-decode';
import { RoleAuth } from 'types/role';
import { getAuthdata } from './storage';

export type TokenData = {
  exp: number;
  user_name: string;
  authorities: RoleAuth[];
};

export const getTokenData = (): TokenData | undefined => {
  try {
    return jwtDecode(getAuthdata().access_token) as TokenData;
  } catch (error) {
    return undefined;
  }
};

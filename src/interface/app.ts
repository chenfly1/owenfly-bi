export interface LoginResult {
  access_token: string;
  client_id: string;
  expires_in: number;
  openid: string;
  refresh_expires_in: number;
  refresh_token: string;
  scope: string;
  token_type: string;
}

export interface LoginParams {
  username: string;
  client_id?: string;
  client_secret?: string;
  password?: string;
  grant_type?: string;
}

export interface UserInfo {
  account: string;
  address: string;
  email: string;
  extension: string;
  mobile: string;
  permissions: {
    authority: string;
    cnName: string;
    code: string;
    enName: string;
    tenantId: string;
  }[];
  roles: {
    code: string;
    name: string;
  }[];
  telephone: string;
  tenantId: string;
  type: 'sadmin' | 'user';
  userBid: string;
  userId: number;
  userName: string;
}

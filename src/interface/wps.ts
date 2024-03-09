export type TenantListType = {
  account: string;
  address?: string;
  bankAccount?: string;
  bid: string;
  code: string;
  contact: string;
  id: number;
  loginPrefix?: string;
  logoIcon?: string;
  name: string;
  openingBank?: string;
  remark?: string;
  setMealBids: string[];
  setMealTexts: string[];
  socialCreditCode?: string;
  state: string;
};

export type ApplicationListType = {
  bid: string;
  code: string;
  id: number;
  name: string;
  remark: string;
  resourceBids: string;
  state: string;
};

export type ApplicationItemType = {
  authority: string;
  bid: string;
  checked: boolean;
  children: ApplicationItemType[];
  code: string;
  expanded: boolean;
  extension: string;
  functions?: any;
  icon: string;
  id: number;
  module: string;
  parentBid: string;
  sort: number;
  state: string;
  systemBid: string;
  systemCode: string;
  systemText: string;
  text: string;
  type: string;
  url: string;
};

export type MealListData = {
  id: number;
  bid: string;
  name: string;
  code: string;
  state: string;
  remark: string;
  resourceBids: string;
};

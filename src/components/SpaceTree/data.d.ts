export type IProps = {
  type: string;
};

export type DataNode = {
  title: string;
  key: string;
  isLeaf?: boolean;
  children?: DataNode[];
};

export type LocationListData = {
  areaLevel: string;
  bizId: string;
  bizUuid: string;
  businessTypes: string;
  title: string;
  key: string;
  id: string;
  name: string;
  projectUid: string;
  roomPeopleNum: string;
  sex: string;
  type: string;
  disabled: boolean;
  leaf?: boolean;
  children?: LocationListData[];
};

export type BuildingData = {
  id: number;
  bid: string;
  projectBid: string;
  name: string;
  serialNumber: string;
  parentId: string;
  nodeId: string;
  nodeType: string;
  nodes: BuildingData[];
};

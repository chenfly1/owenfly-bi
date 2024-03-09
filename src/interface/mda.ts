export type BuildingHouseListType = {
  id: number;
  shortName: string;
  propertyOwner: string;
  mobile: string;
  propertyType: number;
  propertyRight: number;
  useNature: number;
  occupyStatus: number;
  rentStatus: number;
  state: number;
};

export type BuildingHouseType = {
  id?: number;
  projectBid: string;
  stageBid?: string;
  buildingBid: string;
  unitBid?: string;
  floorBid: string;
  name?: string;
  code: string;
  floorArea?: number;
  insideArea?: number;
  billingArea?: number;
  propertyType?: number;
  propertyRight?: number;
  useNature?: number;
  occupyStatus?: number;
  rentStatus?: number;
  state?: number;
};

export type ParkingPlaceListType = {
  id: number;
  shortName: string;
  code: string;
  propertyOwner: string;
  mobile: string;
  parkingType: number;
  propertyRight: number;
  useStatus: number;
  deliverStatus: number;
  state: number;
};

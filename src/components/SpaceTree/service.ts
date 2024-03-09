import { request } from 'umi';
import type { BuildingData } from './data.d';
import type { ResultData } from '@/interface/common';

/** 获取区域树 */
export async function getBuildingTree() {
  return request<ResultData<BuildingData>>('/mda/api/v1/buildingCenter/buildingTree', {
    method: 'POST',
    data: { projectBid: '1557300096378896385' },
  });
}

/**
import { storageSy } from '@/utils/Setting';
 * @module 配置存储信息
 *
 */

interface storageProps {
  userInfo: string;
  token: string;
}

const storageSy: storageProps = {
  userInfo: 'userInfo',
  token: 'TOKEN',
};

export default storageSy;

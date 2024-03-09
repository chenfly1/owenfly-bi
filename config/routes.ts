import { MenuDataItem } from '@ant-design/pro-layout';
const allRoutes: MenuDataItem[] = [
  {
    path: '/home',
    name: '首页',
    icon: 'icon-iconfont11',
    component: './home',
  },
  {
    path: '/indicator',
    name: '指标管理',
    icon: 'icon-iconfonticonfontquxiantutongji',
    component: './indicator',
    authorize: 'sadmin',
  },

  // {
  //   path: '/exploit',
  //   name: '开发管理',
  //   icon: 'icon-icon_yingyongguanli',
  //   component: './exploit',
  // },
  {
    path: '/windosIframe/:id',
    name: '',
    icon: 'icon-shoppingcart',
    component: './iframe',
  },
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/yuanqu',
    redirect: '/home',
  },
  {
    component: '404',
  },
];

export default allRoutes;

import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  title: '智慧园区',
  iconfontUrl: '//at.alicdn.com/t/c/font_3934007_jsc0fyxexhk.js',
  navTheme: 'light',
  primaryColor: '#722ED1',
  layout: 'side',
  contentWidth: 'Fluid',
  fixedHeader: true,
  fixSiderbar: true,
  pwa: false,
  logo: '/static/alita-bi/images/logo.png',
  headerHeight: 48,
  splitMenus: false,
};
export default Settings;

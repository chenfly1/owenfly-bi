import { SettingDrawer } from '@ant-design/pro-layout';
import { PageLoading } from '@ant-design/pro-layout';
import type { RequestConfig, RunTimeLayoutConfig } from 'umi';
import { history } from 'umi';
import RightContent from '@/components/RightContent';
import { requestInterceptors, responseInterceptors, errorHandler } from '@/utils/Request';
import defaultSettings from '../config/defaultSettings';
import routes from '../config/routes';
import 'moment/locale/zh-cn';
import { config } from '@/utils/config';
import type { UserInfo } from './interface/app';
import type { Settings as LayoutSettings } from '@ant-design/pro-layout';
import { getIndexApiOp, getRolet } from '@/services/app';

/** 获取用户信息比较慢的时候会展示一个 loading */
export const initialStateConfig = {
  loading: <PageLoading />,
};
/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<{
  settings?: LayoutSettings & {
    pwa?: boolean;
    logo?: string;
  };
  currentUser?: UserInfo; // 用于存储用户信息 API.CurrentUser 是ts语法 声明的改对象类型
  fetchUserInfo?: () => Promise<UserInfo | undefined>; // 获取用户信息接口
  fetchUserMenu?: () => Promise<UserInfo | undefined>; // 获取菜单接口
  menuData?: []; // 存储菜单
  loading?: boolean;
}> {
  const fetchUserInfo = async () => {
    // try {
    //   const res = await getUserInfo();
    //   return res.data;
    // } catch (error) {
    //   history.push(loginPath);
    // }
    return undefined;
  };
  let currentUser;
  //  const USER_TOKEN = localStorage.getItem(storageSy.token);
  // 当用户登录且点击浏览器刷新时触发
  // if (USER_TOKEN) {
  //   currentUser = await fetchUserInfo();
  // }
  // 当用户登录且浏览器地址为登录页地址时触发  其中 loginPath 是我的登录页地址 请自行修改
  // 防止用户手动输入登录页地址
  //console.log('defaultSettings', defaultSettings);
  // if (history.location.pathname !== loginPath) {
  //   if (currentUser) history.push(history.location.pathname);
  //   else history.push(loginPath);
  // }
  return {
    fetchUserInfo,
    currentUser,
    settings: defaultSettings,
    loading: false,
  };
}
/**
 * @module 请求模块
 */
export const request: RequestConfig = {
  errorHandler,
  requestInterceptors: [requestInterceptors],
  responseInterceptors: [responseInterceptors],
};

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = async ({ initialState, setInitialState }) => {
  //获取接口返回的左侧菜单
  const res = await getIndexApiOp({});
  localStorage.setItem('lovelist', JSON.stringify(res.lovelist));
  localStorage.setItem('reportlist', JSON.stringify(res.reportlist));
  localStorage.setItem('userInfo', JSON.stringify(res.userInfo));

  return {
    rightContentRender: () => <RightContent />,
    disableContentMargin: false,
    // waterMarkProps: {
    //   content: initialState?.currentUser?.userName,
    // },
    // footerRender: () => <Footer />,
    links: [],

    menuHeaderRender: undefined,
    // 自定义 403 页面
    unAccessible: <div>unAccessible</div>,
    // onPageChange: () => {
    //   const { location } = history;
    //   // 如果没有登录，重定向到 login
    //   if (!initialState?.currentUser && location.pathname !== loginPath) {
    //     history.push(loginPath);
    //   } else if (initialState?.currentUser && location.pathname === loginPath) {
    //     history.push('/');
    //   }
    // },

    // 增加一个 loading 的状态
    childrenRender: (children, props) => {
      if (initialState?.loading) return <PageLoading />;
      return (
        <>
          {children}
          {!props.location?.pathname?.includes('/login') && (
            <SettingDrawer
              disableUrlParams
              enableDarkTheme
              settings={initialState?.settings}
              onSettingChange={(settings) => {
                setInitialState((s) => ({
                  ...s,
                  settings,
                }));
              }}
            />
          )}
        </>
      );
    },
    menuDataRender: () => {
      const iconsArr = [
        'icon-custom-finsh',
        'icon-iconfont1',
        'icon-iconfont2',
        'icon-iconfonticonfonterweima',
        'icon-iconfonticonbiaoge',
        'icon-iconfontgangcai',
        'icon-iconfontfangzhipige',
        'icon-iconfonticon-shebei',
        'icon-iconfonthuagongyuanliao',
        'icon-iconfontxiangjiaosuliao',
      ];
      const generatorRouter: any = (newRoutes: any) => {
        return newRoutes.map((item: any, index: number) => {
          return {
            name: item.title,
            path: `/windosIframe/${item.id}?id=${item.id}&url=${item.url}` || '/',
            icon: iconsArr[index],
            routes: item?.children?.length > 0 ? generatorRouter(item.children) : [],
            //  flatMenu: item.parentBid === '0',
          };
        });
      };
      let aaa = [];
      if (res.reportlist) {
        aaa = generatorRouter(res.reportlist);
      }
      const routers = [...routes, ...aaa];
      return routers;
    },
    ...initialState?.settings,
  };
};

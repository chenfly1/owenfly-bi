import { request } from 'umi';
const api = '/api';

/** 获取菜单列表 */
export async function getIndexApiOp(params: any) {
  const res = await request(api + '/bi/index_api_op/', {
    method: 'GET',
    params,
    requestType: 'form',
  });
  // return res;
  const response = {
    reportlist: [
      {
        title: 'smartchart',
        id: 'smartchart',
        type: 9,
        icon: '/static/icons/icon1.png',
        children: [
          {
            title: 'elementUI合并表格',
            id: 'e72',
            type: 0,
            url: '/echart/?type=72',
            image: '',
          },
          {
            title: 'LogicFlow测试',
            id: 'e61',
            type: 0,
            url: '/echart/?type=61',
            image: '',
          },
          {
            title: 'Starrocks后台监控',
            id: 'e24',
            type: 0,
            url: '/echart/?type=24',
            image: '',
          },
          {
            title: 'TEST',
            id: 'e22',
            type: 0,
            url: '/echart/?type=22',
            image: '',
          },
          {
            title: 'xxxxx',
            id: 'e74',
            type: 0,
            url: '/echart/?type=74',
            image: '',
          },
          {
            title: '测试3D',
            id: 'e54',
            type: 0,
            url: '/echart/?type=54',
            image: '',
          },
          {
            title: '测试6.0',
            id: 'e68',
            type: 0,
            url: '/echart/?type=68',
            image: '',
          },
          {
            title: '测试EXCEL',
            id: 'e64',
            type: 0,
            url: '/echart/?type=64',
            image: '',
          },
          {
            title: '测试加载3D模型',
            id: 'e55',
            type: 0,
            url: '/echart/?type=55',
            image: '',
          },
          {
            title: '测试手机端',
            id: 'e62',
            type: 0,
            url: '/echart/?type=62',
            image: '',
          },
        ],
      },
      {
        title: '企微项目',
        id: '企微项目',
        type: 9,
        icon: '/static/icons/icon2.png',
        children: [
          {
            title: '报表项目',
            id: '报表项目',
            type: 9,
            icon: 'https://www.smartchart.cn/static/images/p1.png',
            children: [
              {
                title: '企微报表测试-正式表',
                id: 'e20',
                type: 0,
                url: '/echart/?type=20',
                image: '',
              },
              {
                title: '企微报表预发-正式表',
                id: 'e13',
                type: 0,
                url: '/echart/?type=13',
                image: '',
              },
            ],
          },
          {
            title: '企微看板',
            id: '企微看板',
            type: 9,
            icon: 'https://www.smartchart.cn/static/images/p1.png',
            children: [
              {
                title: 'BI_board_test',
                id: 'e32',
                type: 0,
                url: '/echart/?type=32',
                image: '',
              },
              {
                title: '客户情感倾向看板',
                id: 'e57',
                type: 0,
                url: '/echart/?type=57',
                image: '',
              },
              {
                title: '客户运营数据看板',
                id: 'e53',
                type: 0,
                url: '/echart/?type=53',
                image: '',
              },
              {
                title: '添客认证数据看板',
                id: 'e52',
                type: 0,
                url: '/echart/?type=52',
                image: '',
              },
              {
                title: '群聊舆情监控看板',
                id: 'e56',
                type: 0,
                url: '/echart/?type=56',
                image: '',
              },
            ],
          },
          {
            title: '话术库',
            id: '话术库',
            type: 9,
            icon: 'https://www.smartchart.cn/static/images/p1.png',
            children: [
              {
                title: '企微话术库',
                id: 'e41',
                type: 0,
                url: '/echart/?type=41',
                image: '',
              },
            ],
          },
          {
            title: '会话存档',
            id: '会话存档',
            type: 9,
            icon: 'https://www.smartchart.cn/static/images/p1.png',
            children: [
              {
                title: '会话模拟',
                id: '会话模拟',
                type: 9,
                icon: 'https://www.smartchart.cn/static/images/p1.png',
                children: [
                  {
                    title: 'Starrocks企微聊天导入监控',
                    id: 'e36',
                    type: 0,
                    url: '/echart/?type=36',
                    image: '',
                  },
                  {
                    title: '企微分词监控',
                    id: 'e44',
                    type: 0,
                    url: '/echart/?type=44',
                    image: '',
                  },
                  {
                    title: '企微工单模拟调用',
                    id: 'e42',
                    type: 0,
                    url: '/echart/?type=42',
                    image: '',
                  },
                  {
                    title: '会话存档查询',
                    id: 'e45',
                    type: 0,
                    url: '/echart/?type=45',
                    image: '',
                  },
                ],
              },
              {
                title: '会话存档',
                id: 'e46',
                type: 0,
                url: '/echart/?type=46',
                image: '',
              },
            ],
          },
          {
            title: '数据统计',
            id: '数据统计',
            type: 9,
            icon: 'https://www.smartchart.cn/static/images/p1.png',
            children: [
              {
                title: '敏感行为数据统计',
                id: 'e51',
                type: 0,
                url: '/echart/?type=51',
                image: '',
              },
            ],
          },
          {
            title: '企微报表开发',
            id: 'e21',
            type: 0,
            url: '/echart/?type=21',
            image: '',
          },
          {
            title: '大管家报表访问情况',
            id: 'e25',
            type: 0,
            url: '/echart/?type=25',
            image: '',
          },
          {
            title: '大管家数据同步监控',
            id: 'e27',
            type: 0,
            url: '/echart/?type=27',
            image: '',
          },
        ],
      },
      {
        title: '安心加',
        id: '安心加',
        type: 9,
        icon: '/static/icons/icon3.png',
        children: [
          {
            title: '安心加停车数据查询',
            id: 'e6',
            type: 0,
            url: '/echart/?type=6',
            image: '',
          },
          {
            title: '拖拽透视图形测试',
            id: 'e8',
            type: 0,
            url: '/echart/?type=8',
            image: '',
          },
          {
            title: '测试Lineup图形',
            id: 'e9',
            type: 0,
            url: '/echart/?type=9',
            image: '',
          },
        ],
      },
      {
        title: '开发测试',
        id: '开发测试',
        type: 9,
        icon: '/static/icons/icon4.png',
        children: [
          {
            title: '测试sc',
            id: '测试sc',
            type: 9,
            icon: 'https://www.smartchart.cn/static/images/p1.png',
            children: [
              {
                title: '物业报事投诉智能判单统计',
                id: 'e18',
                type: 0,
                url: '/echart/?type=18',
                image: '',
              },
            ],
          },
          {
            title: '测试分页查询',
            id: 'e11',
            type: 0,
            url: '/echart/?type=11',
            image: '',
          },
        ],
      },
      {
        title: '碧乡',
        id: '碧乡',
        type: 9,
        icon: '/static/icons/icon5.png',
        children: [
          {
            title: '安心加车场数据监控报表（测试）',
            id: 'e7',
            type: 0,
            url: '/echart/?type=7',
            image: '',
          },
          {
            title: '碧乡客户应收款监控表',
            id: 'e5',
            type: 0,
            url: '/echart/?type=5',
            image: '',
          },
        ],
      },
      {
        title: '积分项目',
        id: '积分项目',
        type: 9,
        icon: '/static/icons/icon6.png',
        children: [
          {
            title: '凤凰会报表二',
            id: 'e26',
            type: 0,
            url: '/echart/?type=26',
            image: '',
          },
          {
            title: '凤凰会积分查询',
            id: 'e2',
            type: 0,
            url: '/echart/?type=2',
            image: '',
          },
          {
            title: '凤悦酒店积分查询',
            id: 'e3',
            type: 0,
            url: '/echart/?type=3',
            image: '',
          },
          {
            title: '碧合支付积分查询',
            id: 'e4',
            type: 0,
            url: '/echart/?type=4',
            image: '',
          },
          {
            title: '积分平台结算对帐明细',
            id: 'e33',
            type: 0,
            url: '/echart/?type=33',
            image: '',
          },
        ],
      },
      {
        title: '语音识别',
        id: '语音识别',
        type: 9,
        icon: 'https://www.smartchart.cn/static/images/p1.png',
        children: [
          {
            title: '实时语音转写',
            id: 'e73',
            type: 0,
            url: '/echart/?type=73',
            image: '',
          },
          {
            title: '录音识别一',
            id: 'e63',
            type: 0,
            url: '/echart/?type=63',
            image: '',
          },
          {
            title: '测试录音网关',
            id: 'e70',
            type: 0,
            url: '/echart/?type=70',
            image: '',
          },
        ],
      },
      {
        title: '应用中心',
        id: '应用中心',
        type: 9,
        icon: '/static/icons/icon7.png',
        children: [
          {
            title: '数据上传',
            id: 't3',
            type: 1,
            url: '/pbi/?type=3',
            image: null,
          },
          {
            title: '数据下载',
            id: 't4',
            type: 1,
            url: '/pbi/?type=4',
            image: null,
          },
          {
            title: '数据实验室',
            id: 'e50',
            type: 0,
            url: '/echart/?type=50',
            image: '',
          },
        ],
      },
    ],
    lovelist: ['t2', 'e36', 'e21', 'e72', 'e6', 'e8', 'e11'],
    userInfo: {
      username: 'admin',
      avatar: '/static/avatar/avatar.png',
    },
  };
  return response;
}

/** 取消报表收藏 */
export async function biDelFocus(params: { id: string }) {
  const res = await request(api + '/bi/delFocus/', {
    method: 'GET',
    params,
    requestType: 'form',
  });
  return res;
}

/** 设备指标分页列表 */
export async function queryList(data?: Record<string, any>) {
  return request(api + '/yuanqu/get_index/', {
    method: 'POST',
    data: data,
    requestType: 'form',
  });
}

/** 新增指标 */
export async function addIndex(data: any) {
  return request(api + '/yuanqu/add_index/', {
    method: 'POST',
    data,
    requestType: 'form',
  });
}

/** 修改/删除指标 */
export async function changeIndex(data: any) {
  const res = await request(api + '/yuanqu/modify_index/', {
    method: 'POST',
    data,
    requestType: 'form',
  });
  return res;
}

/** 获取已上线指标清单 */
export async function getDslist(params: any) {
  const res = await request(api + '/yuanqu/get_dslist/', {
    method: 'GET',
    params,
    requestType: 'form',
  });

  return res.data;
}
/** 获取角色指标页面权限 */
export async function getRolet(params: any) {
  const res = await request(api + '/yuanqu/get_role/', {
    method: 'GET',
    params,
    requestType: 'form',
  });

  return res;
}

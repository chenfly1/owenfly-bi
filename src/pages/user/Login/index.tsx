import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Alert, message } from 'antd';
import React, { useState } from 'react';
import { ProFormText, LoginFormPage } from '@ant-design/pro-form';
import { history, useModel } from 'umi';
import { login, getUserInfo } from '@/services/app';
import styles from './index.less';
import type { LoginParams, UserInfo } from '@/interface/app';
import type { ResultData } from '@/interface/common';
import md5 from 'js-md5';
import qs from 'qs';
import { config } from '@/utils/config';
import { storageSy } from '@/utils/Setting';
import { useLocalStorageState } from 'ahooks';
import { CodeMessage } from '@/utils/Request/constant';
const LoginMessage: React.FC<{
  content: string;
}> = ({ content }) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type="error"
    showIcon
  />
);
const Login: React.FC = () => {
  const [, setToken] = useLocalStorageState<string>(storageSy.token);
  const [userLoginState] = useState<ResultData<UserInfo>>();
  const { initialState, setInitialState } = useModel('@@initialState');
  console.log('initialState: ', initialState);

  const handleSubmit = async (values: LoginParams) => {
    const data = qs.stringify({
      username: values.username,
      password: md5(values.password || ''),
      phone: '',
      validateCode: '',
      client_id: config.client_id,
      client_secret: config.client_secret,
      grant_type: config.grant_type,
    });
    try {
      // 登录
      const result = await login(data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      if (result.code === CodeMessage.SUCCESS) {
        const defaultLoginSuccessMessage = '登录成功！';
        setToken(result.data?.access_token);
        const res = await getUserInfo();
        setInitialState((s) => ({ ...s, currentUser: res.data }));

        /** 此方法会跳转到 redirect 参数所在的位置 */

        if (!history) return;
        const { query } = history.location;
        const { redirect } = query as {
          redirect: string;
        };
        history.push(redirect || '/');
        message.success(defaultLoginSuccessMessage);
        return;
      }
    } catch (error) {
      const defaultLoginFailureMessage = '登录失败，请重试！';
      message.error(defaultLoginFailureMessage);
    }
  };
  const code = userLoginState?.code || CodeMessage.SUCCESS;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <LoginFormPage
          backgroundImageUrl="/images/login-bg.png"
          logo={
            <img
              alt="logo"
              src="/images/logo-full.png"
              style={{ width: '250px', height: '60px' }}
            />
          }
          initialValues={{
            autoLogin: true,
          }}
          activityConfig={{
            title: '零洞科技智慧园区',
            subTitle: '仅供内部使用',
          }}
          onFinish={async (values) => {
            await handleSubmit(values as LoginParams);
          }}
        >
          {code !== CodeMessage.SUCCESS && <LoginMessage content={'错误的用户名和密码'} />}
          {
            <>
              <ProFormText
                name="username"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined className={styles.prefixIcon} />,
                }}
                placeholder={'请输入用户名'}
                rules={[
                  {
                    required: true,
                    message: '用户名是必填项！',
                  },
                ]}
              />
              <ProFormText.Password
                name="password"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={styles.prefixIcon} />,
                }}
                placeholder={'请输入密码'}
                rules={[
                  {
                    required: true,
                    message: '密码是必填项！',
                  },
                ]}
              />
            </>
          }
        </LoginFormPage>
      </div>
    </div>
  );
};
export default Login;

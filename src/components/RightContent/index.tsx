import { Space, message, Image } from 'antd';
import React, { useEffect, useState } from 'react';
import { useModel } from 'umi';
import Avatar from './AvatarDropdown';
import styles from './index.less';
import { history } from 'umi';
import { SyncOutlined } from '@ant-design/icons';
import { addFocus, biDelFocus } from './service';

const GlobalHeaderRight: React.FC = () => {
  const { initialState } = useModel('@@initialState');
  const [location, setLocation] = useState('');
  const localStorageLovelist = localStorage.getItem('lovelist');
  const [lovelist, setLovelist] = useState<any>(localStorageLovelist);
  const [queryId, setQueryId] = useState<any>('');
  const [queryUrl, setqueryUrl] = useState<any>('');

  useEffect(() => {
    setLocation(history.location.pathname);
    console.log('history.location:', history.location);
    setQueryId(history?.location?.query?.id);
    setqueryUrl(history?.location?.query?.url);
  }, [history.location.pathname]);

  if (!initialState || !initialState.settings) {
    return null;
  }
  const { navTheme, layout } = initialState.settings;
  let className = styles.right;
  if ((navTheme === 'dark' && layout === 'top') || layout === 'mix') {
    className = `${styles.right}  ${styles.dark}`;
  }

  const collectClick = () => {};
  const favorite = async () => {
    const res = await addFocus({ id: queryId });
    if (res.status) {
      message.success('收藏成功');
      localStorage.setItem('lovelist', res.lovelist);
      setLovelist(res.lovelist);
    } else {
      message.error(res.msg);
    }
  };
  const cancel = async () => {
    const res = await biDelFocus({ id: queryId });
    if (res.status) {
      message.success('取消收藏成功');
      localStorage.setItem('lovelist', res.lovelist);
      setLovelist(res.lovelist);
    } else {
      message.error(res.msg);
    }
  };
  return (
    <Space className={className}>
      <Avatar menu />
      {location === '/home' || location === '/indicator' || location === '/404' ? null : (
        <div className={styles.collect} onClick={collectClick}>
          <SyncOutlined
            className={styles.icon}
            onClick={() => {
              //刷新iframe
              document.getElementById('Iframe').contentWindow.location.reload();
              // history.go(0);
            }}
          />{' '}
          {lovelist?.includes(queryId) ? (
            <Image
              height="25px"
              width="25px"
              preview={false}
              src="/static/alita-bi/icons/icon_xx.png"
              onClick={cancel}
            />
          ) : (
            <Image
              height="35px"
              width="35px"
              preview={false}
              src="/static/alita-bi/icons/icon_qx.png"
              onClick={favorite}
            />
          )}{' '}
        </div>
      )}
    </Space>
  );
};
export default GlobalHeaderRight;

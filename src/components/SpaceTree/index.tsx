import React, { useState, useEffect } from 'react';
import { Input, Tree, Card } from 'antd';
import type { IProps } from './data.d';
import type { DataNode, TreeProps } from 'antd/es/tree';
import styles from './style.less';

const { Search } = Input;

const Data: DataNode[] = [
  {
    title: 'parent 1',
    key: '0-0',
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        children: [
          {
            title: 'leaf',
            key: '0-0-0-0',
          },
          {
            title: 'leaf',
            key: '0-0-0-1',
          },
        ],
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        children: [{ title: <span style={{ color: '#1890ff' }}>sss</span>, key: '0-0-1-0' }],
      },
    ],
  },
];

const LingdongTree: React.FC<IProps & TreeProps> = ({ type, ...rest }) => {
  // const [treeData, setTreeData] = useState(Data);
  const [treeData] = useState(Data);

  //获取项目权限列表
  useEffect(() => {
    // getBuildingTree().then(() => {});
    // setTreeData();
  }, []);

  const onChange = () => {};

  return (
    <Card bordered={false} className={styles.LingdongTree}>
      <Search style={{ marginBottom: 8 }} placeholder="请输入关键字搜索" onChange={onChange} />
      <Tree treeData={treeData} {...rest} />
    </Card>
  );
};

export default LingdongTree;

import { PlusOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns, ProFormInstance } from '@ant-design/pro-components';

import { PageContainer } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { message, Image, Modal, Button } from 'antd';
import React, { useRef, useState, useEffect } from 'react';

import type { ListItem } from './data.d';
import { queryList, changeIndex } from '@/services/app';
import Add from './add';
const { confirm } = Modal;
export default () => {
  const [categoryList, setCategoryList] = useState([]); //传递add页面指标类型下拉枚举
  const [projectList, setProjectList] = useState([]); //传递add页面所属项目下拉枚举
  const [carMap, setCarMap] = useState({}); //指标类型下拉枚举
  const queryList1 = async (params: any) => {
    params.pageNo = params.current;
    delete params.current;
    const res = await queryList({
      ...params,
    });
    const map: any = {};
    res.category.map((i: any) => {
      map[i.id] = { text: i.name };
    });
    setCarMap(map);
    setCategoryList(res.category);
    setProjectList(res.project);
    return {
      data: res.data,
      success: res.status === 200 ? true : false,
      total: res.totalQty,
    };
  };
  useEffect(() => {}, [categoryList]);
  const actionRef = useRef<ActionType>();
  const reload = () => {
    actionRef?.current?.reload();
  };
  const [modalData, setModalData] = useState({});

  const formRef = useRef<ProFormInstance>();
  const [dialogTitle, setDialogTitle] = useState('新建');
  const [drawerVisit, setDrawerVisit] = useState(false);
  const columns: ProColumns<ListItem>[] = [
    {
      title: '指标ID',
      dataIndex: 'id',
      order: 4,
      align: 'center',
      ellipsis: true,
      search: false,
    },
    {
      title: '指标名称',
      dataIndex: 'name',
      order: 4,

      align: 'center',
      ellipsis: true,
    },
    {
      title: '项目名称',
      dataIndex: 'project',
      order: 4,

      align: 'center',
      ellipsis: true,
    },
    {
      title: '指标类型',
      dataIndex: 'category_id',
      order: 4,
      align: 'center',
      ellipsis: true,
      valueEnum: {
        ...carMap,
      },
    },
    {
      title: '指标描述',
      dataIndex: 'remark',
      order: 4,
      align: 'center',
      ellipsis: true,
      search: false,
    },
    {
      title: '指标缩略图',
      dataIndex: 'image',
      order: 4,
      align: 'center',
      ellipsis: true,
      search: false,
      render: (_, record) => [
        <Image width={100} height={100} key={record.id} preview={false} src={record.image} />,
      ],
    },
    {
      title: '指标状态',
      dataIndex: 'status',
      align: 'center',
      // filters: true,
      // onFilter: true,
      ellipsis: true,
      order: 1,
      valueType: 'select',
      valueEnum: {
        1: {
          text: '上线',
          status: 'Success',
        },
        0: {
          text: '下线',
          status: 'Default',
        },
      },
      render: (_, record) => [<span key={record.id}>{record?.status ? '上线' : '下线'}</span>],
    },
    {
      title: '创建人',
      dataIndex: 'creator',
      order: 4,
      align: 'center',
      ellipsis: true,
    },
    {
      title: '创建时间',
      dataIndex: 'create_time',
      order: 4,
      align: 'center',
      valueType: 'dateRange',
      search: {
        transform: (value) => {
          console.log('value', value);
          return {
            create_time_s: value[0],
            create_time_e: value[1],
          };
        },
      },
      // render: (_, record) => [<span key={record.id}>{record?.create_time.split('T')[0]}</span>],
    },

    {
      title: '更新时间',
      dataIndex: 'update_time',
      order: 4,
      align: 'center',
      valueType: 'dateRange',
      search: {
        transform: (value) => {
          return {
            update_time_s: value[0],
            update_time_e: value[1],
          };
        },
      },
      // render: (_, record) => [<span key={record.id}>{record?.update_time?.split('T')[0]}</span>],
    },
    {
      title: '更新人',
      dataIndex: 'updater',
      align: 'center',
      ellipsis: true,
      search: false,
    },
    {
      title: '操作',
      valueType: 'option',
      align: 'center',
      width: 150,
      key: 'option',
      render: (_, record) => [
        <Button
          key="edit"
          type="link"
          onClick={() => {
            setDrawerVisit(() => {
              return true;
            });
            setModalData(record);
            setDialogTitle('编辑');
          }}
        >
          编辑
        </Button>,
        <Button
          type="link"
          key="del"
          onClick={() => {
            console.log('_, record', _, record);
            confirm({
              icon: <ExclamationCircleOutlined />,
              content: '确认是否删除此条数据？删除后无法找回',
              onOk: async () => {
                const res = await changeIndex({ id: record.id, is_delete: 1 });

                if (res.status === 200) {
                  message.success('删除成功');
                } else {
                  message.error('删除失败');
                }
                actionRef?.current?.reload();
              },
              onCancel() {
                console.log('Cancel关闭');
              },
            });
          }}
        >
          删除
        </Button>,
      ],
    },
  ];

  return (
    <PageContainer>
      <ProTable<ListItem>
        columns={columns}
        actionRef={actionRef}
        formRef={formRef}
        cardBordered
        request={queryList1}
        rowKey="id"
        search={{
          labelWidth: 'auto',
          defaultColsNumber: 7,
        }}
        pagination={{
          showSizeChanger: true,
        }}
        options={{
          setting: {
            listsHeight: 400,
          },
        }}
        dateFormatter="string"
        headerTitle={
          <Button
            key="add"
            onClick={() => {
              setDrawerVisit(true);
              setDialogTitle('新建');
              setModalData({});
            }}
            icon={<PlusOutlined />}
            type="primary"
          >
            新建
          </Button>
        }
      />
      <Add
        open={drawerVisit}
        onOpenChange={setDrawerVisit}
        dialogTitle={dialogTitle}
        modalData={modalData}
        categoryList={categoryList}
        projectList={projectList}
        reload={reload}
      />
    </PageContainer>
  );
};

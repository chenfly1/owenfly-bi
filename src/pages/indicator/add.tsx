import {
  ModalForm,
  ProFormText,
  ProFormSelect,
  ProFormTextArea,
  CheckCard,
  ProFormInstance,
  editableRowByKey,
} from '@ant-design/pro-components';
import React, { useRef, useEffect, useState } from 'react';
import { message, Form } from 'antd';
import type { IProps } from './data';
import { addIndex, changeIndex } from '@/services/app';
const Add: React.FC<IProps> = ({
  open,
  onOpenChange,
  dialogTitle,
  modalData,
  categoryList,
  reload,
  projectList,
}) => {
  const formRef = useRef<ProFormInstance>();
  const [editName, setEditName] = useState('');
  const [editImage, setEditImage] = useState('');
  useEffect(() => {
    // getDslist({});
    formRef?.current?.resetFields();
    if (dialogTitle == '编辑') {
      setEditName(modalData.name);
      setEditImage(modalData.image);
      formRef?.current?.setFieldsValue({ ...modalData, status: modalData.status ? 1 : 0 });
    }
  }, [open, dialogTitle, modalData]);
  return (
    <ModalForm
      labelCol={{ flex: '100px' }}
      layout="horizontal"
      formRef={formRef}
      onOpenChange={onOpenChange}
      width={720}
      title={dialogTitle}
      open={open}
      onFinish={async (a) => {
        //提交成功
        let e = { ...a };
        if (dialogTitle === '新建') {
          const res = await addIndex(e);
          if (res.status == 200) {
            message.success('新增成功');
            reload();
          } else {
            message.error(res.data);
            return false;
          }
        } else {
          e = { ...modalData, ...e };
          if (e.name == editName) {
            delete e.name;
          }
          if (e.image == editImage) {
            delete e.image;
          }
          const res = await changeIndex(e);
          if (res.status == 200) {
            message.success('编辑成功');
            reload();
          } else {
            message.error(res.data);
            return false;
          }
        }

        formRef?.current?.resetFields();
        return true;
      }}
      onValuesChange={(changeValues) => console.log('changeValues:', changeValues)}
    >
      <ProFormText
        name="name"
        label="指标名称"
        rules={[
          {
            required: true,
          },
        ]}
        placeholder="请输入指标名称"
      />
      <ProFormSelect
        label="所属项目"
        name="project_id"
        placeholder="请选择所属项目"
        rules={[
          {
            required: true,
            message: '请选择所属项目',
          },
        ]}
        options={(projectList || []).map((item) => ({
          value: item.id,
          label: item.name,
        }))}
      />
      <ProFormSelect
        label="指标类型"
        name="category_id"
        placeholder="请选择指标类型"
        rules={[
          {
            required: true,
            message: '请选择指标类型',
          },
        ]}
        options={(categoryList || []).map((item) => ({
          value: item.id,
          label: item.name,
        }))}
      />
      <ProFormSelect
        label="指标状态"
        name="status"
        placeholder="请选择指标状态"
        rules={[
          {
            required: true,
            message: '请选择指标状态',
          },
        ]}
        options={[
          { value: 1, label: '上线' },
          { value: 0, label: '下线' },
        ]}
      />
      <ProFormTextArea colProps={{ span: 24 }} name="remark" label="指标描述" />
      <Form.Item label="缩略图" name="image" rules={[{ required: true, message: '请选择缩略图' }]}>
        <CheckCard.Group
          value="image"
          onChange={(value) => {
            console.log('formRef', value, 'formRef:', formRef);
          }}
          // defaultValue=""//默认值
        >
          <CheckCard
            title="quxian"
            description="quxian"
            value="/media/yuanqu/quxian.png"
            style={{ width: 100, height: 100, marginBottom: '25px' }}
            cover={
              <div style={{ textAlign: 'center' }}>
                <img
                  alt="example"
                  style={{ padding: '10px' }}
                  height={100}
                  width={100}
                  src="/static/alita-bi/images/quxian.png"
                />
                <span>曲线图</span>
              </div>
            }
          />
          <CheckCard
            title="zhuzhuang"
            description="zhuzhuang"
            value="/media/yuanqu/a.png"
            style={{ width: 100, height: 100, marginBottom: '25px' }}
            cover={
              <div style={{ textAlign: 'center' }}>
                <img
                  alt="example"
                  style={{ padding: '10px' }}
                  height={100}
                  width={100}
                  src="/static/alita-bi/images/zhuzhuang.png"
                />
                <span>柱状图</span>
              </div>
            }
          />
          <CheckCard
            title="bingzhuang"
            description="bingzhuang"
            value="/media/yuanqu/bingzhuang.png"
            style={{ width: 100, height: 100, marginBottom: '25px' }}
            cover={
              <div style={{ textAlign: 'center' }}>
                <img
                  alt="example"
                  style={{ padding: '10px' }}
                  height={100}
                  width={100}
                  src="/static/alita-bi/images/bingzhuang.png"
                />
                <span>饼状图</span>
              </div>
            }
          />
          <CheckCard
            title="zhuxian"
            description="zhuxian"
            value="/media/yuanqu/zhuxian.png"
            style={{ width: 100, height: 100, marginBottom: '25px' }}
            cover={
              <div style={{ textAlign: 'center' }}>
                <img
                  alt="example"
                  style={{ padding: '10px' }}
                  height={100}
                  width={100}
                  src="/static/alita-bi/images/zhuxian.png"
                />
                <span>柱线图</span>
              </div>
            }
          />
          <CheckCard
            title="yibiaopan"
            description="yibiaopan"
            value="/media/yuanqu/yibiaopan.png"
            style={{ width: 100, height: 100, marginBottom: '25px' }}
            cover={
              <div style={{ textAlign: 'center' }}>
                <img
                  alt="example"
                  style={{ padding: '10px' }}
                  height={100}
                  width={100}
                  src="/static/alita-bi/images/yibiaopan.png"
                />
                <span>仪表盘</span>
              </div>
            }
          />
          <CheckCard
            title="duidie"
            description="duidie"
            value="/media/yuanqu/duidie.png"
            style={{ width: 100, height: 100, marginBottom: '25px' }}
            cover={
              <div style={{ textAlign: 'center' }}>
                <img
                  alt="example"
                  style={{ padding: '10px' }}
                  height={100}
                  width={100}
                  src="/static/alita-bi/images/duidie.png"
                />
                <span>堆叠图</span>
              </div>
            }
          />
          <CheckCard
            title="biaoge"
            description="biaoge"
            value="/media/yuanqu/biaoge.png"
            style={{ width: 100, height: 100, marginBottom: '25px' }}
            cover={
              <div style={{ textAlign: 'center' }}>
                <img
                  alt="example"
                  style={{ padding: '10px' }}
                  height={100}
                  width={100}
                  src="/static/alita-bi/images/biaoge.png"
                />
                <span>表格</span>
              </div>
            }
          />
        </CheckCard.Group>
      </Form.Item>
    </ModalForm>
  );
};

export default Add;

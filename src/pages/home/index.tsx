import { Card, Select, Row, Image, Button, Col, Carousel, message } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import React, { useRef, useState, useEffect } from 'react';
import { getIndexApiOp, biDelFocus } from '@/services/app';
import styles from './style.less';
import { history } from 'umi';
//处理搜索框的下拉数据
const arrayFilter = (lists: any, result: any) => {
  lists.forEach((item: any) => {
    if (!Array.isArray(item.children)) {
      result.push({
        label: item.title,
        id: item.id,
        value: item.id + '?id=' + item.id + '&url=' + item.url,
      });
    } else if (item.children.length <= 0) {
      result.push({
        label: item.title,
        id: item.id,
        value: item.id + '?id=' + item.id + '&url=' + item.url,
      });
    } else {
      arrayFilter(item.children, result);
    }
  });
};
export default () => {
  const [arr1, setArr1] = useState([]);
  const [searchList, setSearchList] = useState([]); //搜索下拉数组
  const onChange = (value: string) => {
    const url = '/windosIframe/' + value;
    history.push(url);
  };
  const carouselEL = useRef(null);
  //处理收藏轮播图，每个轮播取4个
  const chunk = (array: [{ id: number; tit: string }], size: number): any => {
    const length = array.length;
    //判断不是数组，或者size没有设置，size小于1，就返回空数组
    if (!length || !size || size < 1) {
      return [];
    }
    //核心部分
    let index = 0; //用来表示切割元素的范围start
    let resIndex = 0; //用来递增表示输出数组的下标

    //根据length和size算出输出数组的长度，并且创建它。
    const result = new Array(Math.ceil(length / size));
    //进行循环
    while (index < length) {
      //循环过程中设置result[0]和result[1]的值。该值根据array.slice切割得到。
      result[resIndex++] = array.slice(index, (index += size));
    }

    //输出新数组
    return result;
  };
  //根据收藏id在所有菜单获取数据，并处理收藏轮图返回的数据
  const favoritesList = (aaa: any, bbb: any) => {
    const newArr: any = [];
    const generatorRouter = (a: any, b: any) => {
      a.map((item: any) => {
        if (b.includes(item.id)) {
          newArr.push(item);
        }
        if (item?.children?.length > 0) {
          generatorRouter(item.children, b);
        }
      });
    };
    generatorRouter(aaa, bbb);
    setArr1(chunk(newArr, 4));
  };
  const init = async () => {
    const res = await getIndexApiOp({});
    localStorage.setItem('lovelist', JSON.stringify(res.lovelist));
    localStorage.setItem('reportlist', JSON.stringify(res.reportlist));
    const arrs: any = [];
    arrayFilter(res.reportlist, arrs);
    setSearchList(arrs);
    favoritesList(res.reportlist, res.lovelist);
  };
  const cancelCollection = async (val: any) => {
    const res = await biDelFocus({ id: val.id });
    message.success('已取消收藏');
    init();
  };

  useEffect(() => {
    init();
  }, []);
  const navigeteTo = (i: any) => {
    console.log(i);
    history.push(`/windosIframe/${i.id}?id=${i.id}&url=${i.url}`);
  };
  return (
    <PageContainer>
      <div className={styles.head}>
        <Image
          height="100%"
          width="100%"
          preview={false}
          src="/static/alita-bi/images/homebg.png"
          className={styles.head}
        ></Image>
        <Row gutter={16} className={styles.portal}>
          <p className={styles.title}>园区数据门户</p>
          <Select
            showSearch
            allowClear
            onChange={onChange}
            style={{ width: 320, height: 32 }}
            placeholder="请输入报表/看板/大屏名称搜索"
            // optionFilterProp="children"
            filterOption={(input, option) => (option?.label ?? '').includes(input)}
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? '')
                .toLowerCase()
                .localeCompare((optionB?.label ?? '').toLowerCase())
            }
            options={searchList}
          />
        </Row>
      </div>
      <Card bordered={false} className={styles.carousel}>
        <div className={styles.flo}>
          <h1>
            <div className={styles.leftcol}></div> 我的收藏
          </h1>
          <div>
            <Button
              className="leftButton"
              style={{ left: 35 }}
              onClick={() => {
                carouselEL?.current?.prev();
              }}
              icon={<RightOutlined />}
            ></Button>
            <Button
              className="rightButton"
              style={{ right: 35 }}
              onClick={() => {
                carouselEL?.current?.next();
              }}
              icon={<LeftOutlined />}
            ></Button>
          </div>
        </div>

        <Carousel autoplay={false} ref={carouselEL}>
          {arr1.map((item, index) => {
            return (
              <div className={styles.car} key={index}>
                <Row gutter={16}>
                  {item.map((i: any, v: number) => {
                    return (
                      <Col span={6} className={styles.flex_item} key={v}>
                        <Image
                          height="200px"
                          width="200px"
                          onClick={() => {
                            navigeteTo(i);
                          }}
                          preview={false}
                          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        />
                        <div className={styles.bottom}>
                          <div className={styles.left}>{i.title}</div>
                          <div
                            className={styles.right}
                            onClick={() => {
                              cancelCollection(i);
                            }}
                          >
                            <span>
                              已收藏{' '}
                              <Image
                                height="15px"
                                width="15px"
                                preview={false}
                                src="/static/alita-bi/icons/icon_xx.png"
                              />{' '}
                            </span>
                          </div>
                        </div>
                      </Col>
                    );
                  })}
                </Row>
              </div>
            );
          })}
        </Carousel>
      </Card>
      <Card bordered={false} className={styles.carousel}>
        <div>
          <h1>
            <div className={styles.leftcol}></div> 快捷入口
          </h1>
        </div>

        <Row gutter={16}>
          <Col span={6} className={styles.col}>
            <div className={styles.cols}>
              <Button block onClick={() => {}} size="large" className={styles.btn}>
                自动取数
              </Button>
            </div>
          </Col>
          <Col span={6} className={styles.col}>
            <div className={styles.cols}>
              <Button block onClick={() => {}} size="large" className={styles.btn}>
                自动取数
              </Button>
            </div>
          </Col>
          <Col span={6} className={styles.col}>
            <div className={styles.cols}>
              <Button block onClick={() => {}} size="large" className={styles.btn}>
                自动取数
              </Button>
            </div>
          </Col>
          <Col span={6} className={styles.col}>
            <div className={styles.cols}>
              <Button block onClick={() => {}} size="large" className={styles.btn}>
                自动取数
              </Button>
            </div>
          </Col>
        </Row>
      </Card>
    </PageContainer>
  );
};

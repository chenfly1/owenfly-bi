import { Moment, getDate } from './date';
import { ExportExcel } from './tools';
/**
 * @module 公用方法
 *
 */
class Method {
  /**
   * @module 将数据转化为FormData对象
   * @param obj
   * @returns
   */
  static convertToFormData = (obj: any) => {
    const data = new FormData();
    Object.keys(obj).forEach((i) => {
      if (obj[i] === undefined) return;
      if (obj[i] instanceof FileList) {
        [].map.call(obj[i], (file) => data.append(i, file));
      } else if (
        obj[i] instanceof Array &&
        (obj[i][0] instanceof File ||
          (typeof obj[i][0] === 'string' && obj[i][0].indexOf('data') === 0) ||
          obj[i][0] instanceof FileList)
      ) {
        // 多张图片
        obj[i].forEach((item: any) => {
          if (item instanceof FileList) [].map.call(item, (file) => data.append(i, file));
          else data.append(i, item);
        });
      } else if ((typeof obj[i]).indexOf('object') >= 0) {
        if (
          obj[i] instanceof Array &&
          (obj[i][0] instanceof File || obj[i][0] instanceof FileList)
        ) {
          // 上传多张图片
          obj[i].forEach((item: any) => {
            if (item instanceof File) data.append(i, item);
            else [].map.call(item, (file) => data.append(i, file));
          });
        } else data.append(i, JSON.stringify(obj[i]));
      } else {
        data.append(i, obj[i]);
      }
    });
    return data;
  };

  /**
   * @module 树形数组
   *
   * @param arrList 数组集合
   * @param id 子id
   * @param fid 父id
   * @param children 将子id放入fid的名字，默认children
   */
  static ArrayTree = (allList: any[], id: string, fid: string, children: string = 'children') => {
    const deepList = JSON.parse(JSON.stringify(allList));
    let filterArr: any = [];
    const tree = deepList.map((parent: any) => {
      const item = deepList.filter((child: any) => parent[id] == child[fid]);
      if (item.length > 0) {
        parent[children] = item;
        filterArr = [...filterArr, ...item];
      }
      return parent;
    });

    const result: any = Method.ArrayTree(tree, filterArr, id);
    return result;
  };

  /**
   * @module 日期转化

   */
  static Moment = Moment;

  // 时间转化
  static getDate = getDate;

  // 导出数据
  static ExportExcel = ExportExcel;
}

export default Method;

export type ListItem = {
  address: string;
  bid: string;
  email: string;
  gender: string;
  gmtCreated: string;
  gmtCreator: string;
  id: string | number;
  mobile: string;
  name: string;
  orgBid: string;
  orgFullName: string;
  orgName: string;
  remark: string;
  status: string;
  telephone: string;
  tenantId: string;
};
export type IProps = {
  open: boolean;
  dialogTitle: string;
  onOpenChange: (open: boolean) => void;
  modalData?: any;
  categoryList: { id: string | number; name: string }[];
  projectList: { id: string | number; name: string }[];
  reload?: any;
};

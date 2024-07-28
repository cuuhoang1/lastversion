import * as Yup from "yup";

export const loginSchema = Yup.object({
  fullName: Yup.string().required("Cần nhập đầy đủ họ tên."),
  tableName: Yup.string().required("Nhập số bàn."),
});

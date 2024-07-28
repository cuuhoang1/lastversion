import * as Yup from "yup";

export const adminFooterSchema = Yup.object({
  location: Yup.string().url("Nhập đúng địa chỉ."),
  email: Yup.string().email("Nhập đúng định dạng email."),
  phoneNumber: Yup.string(),
  description: Yup.string(),
  day: Yup.string(),
  time: Yup.string(),
  link: Yup.string().url("Nhập đúng đường dẫn."),
  icon: Yup.string(),
});

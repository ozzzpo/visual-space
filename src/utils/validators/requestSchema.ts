import * as yup from "yup";
export const requestSchema = yup.object().shape({
  name: yup.string().required("Необходимое поле"),
  phone: yup
    .string()
    .required("Необходимое поле")
    .matches(/^\+7\d{10}$/, "Введите телефон в формате +7**********"),
  comment: yup.string(),
});

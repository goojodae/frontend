import * as yup from "yup";

const Schema = yup.object({
  loginId: yup
    .string()
    .required("아이디를 입력해주세요")
    .min(6, "최소 6자리 이상 입력해주세요.")
    .max(20, "최대 20자까지 가능합니다.")
    ,
  password: yup
    .string()
    .required("영문 소문자, 숫자, 특수문자를 포함한 8~20자리를 입력해주세요.")
    // .min(8, "최소 8자리 이상 입력해주세요.")
    .max(20, "최대 20자까지 가능합니다.")
    ,
});

export default Schema;

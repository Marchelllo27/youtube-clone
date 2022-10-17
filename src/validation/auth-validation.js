import * as yup from "yup";

const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  email: yup
    .string()
    .lowercase() // transform string to lowercase just while validation
    .matches(/^[a-zA-Z0-9._+-]+@[a-zA-Z0-9-]+\.[a-z]{2,}$/, "Not valid email")
    .required("Email is required"),
  password: yup
    .string()
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/,
      "At least: 1 uppercase, 1 lowercase, 1 number, 1 special character "
    )
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must match")
    .required("Password should match"),
});

export const loginSchemaValidation = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

export default schema;

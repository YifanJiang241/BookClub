import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),

  password: Yup.string()
    .min(4, "Password should be at least 4 characters")
    .required("Password of at least 4 characters is required")
});

export default LoginSchema;

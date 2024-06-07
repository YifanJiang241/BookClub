import * as Yup from "yup";

const userSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(3, 'minimum 3 characters required')
    .max(20, 'maximum 30 characters allowed'),

  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),

  userName: Yup.string()
  .min(3, "Username is too short")
  .required("Username is required"),

  password: Yup.string()
  .min(4, "Password should be at least 4 characters")
  .required("Password of at least 4 characters is required"),

  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

export default userSchema;

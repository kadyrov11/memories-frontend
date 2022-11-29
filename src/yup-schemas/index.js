import * as Yup from 'yup';

export const registerSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Min length is 2').max(30, 'Max length is 30').required('Required'),
  lastName: Yup.string().min(2, 'Min length is 2').max(30, 'Max length is 30').required('Required'),
  email: Yup.string().email("Invalid email").required('Required'),
  password: Yup.string().min(8, 'Min length is 8').required('Required'),
  confirmPass: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .min(8, 'Min length is 8')
    .required('Confirm password')
});

export const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required('Required'),
  password: Yup.string().min(8, 'Min length is 8').required('Required'),
});
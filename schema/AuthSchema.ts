import { object, string, ref, mixed } from 'yup';

export const LoginSchema = object({
  company: string().required('Company is required'),
  password: string().required('Password is required'),
  role: string(),
});

// export const RegistrationSchema = object({
//   first_name: string(),
//   last_name: string().required('Last name is required'),
//   email: string().email('Please enter a valid email').required('Email is required'),
//   phone_number: string().required('Phone number is required'),
//   password: string()
//     .required('Password is required')
//     .min(6, 'Password must be at least 6 characters'),
//   password_confirm: string().oneOf([ref('password'), null], 'Passwords must match'),
// });

// export const PasswordChangeSchema = object({
//   old_password: string().required('Old password is required'),
//   new_password: string()
//     .required('Password is required')
//     .min(6, 'Password must be at least 6 characters'),
//   new_password_confirm: string().oneOf([ref('new_password'), null], 'Passwords must match'),
// });

// export const ProfileSchema = object({
//   first_name: string(),
//   last_name: string(),
//   phone_number: string(),
//   profile_pic_url: mixed(),
// });

import * as yup from 'yup'

import { type AddAdminFormValue } from './add-admin-form-values'

export const addAdminSchema = yup.object<AddAdminFormValue>({
  tgId: yup
    .string()
    .matches(/^\d+$/, 'ID Телеграм должен состоять только из цифр')
    .min(4, 'ID Телеграм должен быть не менее 4 символов')
    .required('Это поле обязательное'),
  tgLogin: yup
    .string()
    .matches(/^@[a-zA-Z0-9!#\-+=]+$/, 'Логин в Телеграм должен начинаться с @')
    .min(3, 'Логин в Телеграм должен быть не менее 3 символов')
    .required('Это поле обязательное'),
  name: yup.string().min(3, 'Имя должно содержать не менее 3 символов').required('Это поле обязательное')
})

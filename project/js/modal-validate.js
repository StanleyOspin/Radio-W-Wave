const modalValidator = new JustValidate('#modal-form');

modalValidator

.addField('#login', [{
  rule: 'required',
  value: true,
  errorMessage: 'Введите логин',
  },
  {
    rule: 'minLength',
    value: 2,
    errorMessage: 'Не менее 2-х символов'
  },
  {
    rule: 'maxLength',
    value: 30,
    errorMessage: 'Слишком длинный логин'
  }
])

.addField('#password', [{
  rule: 'required',
  value: true,
  errorMessage: 'Введите пароль',
  },
  {
    rule: 'minLength',
    value: 6,
    errorMessage: 'Не менее 6-ти символов'
  },
  {
    rule: 'maxLength',
    value: 30,
    errorMessage: 'Слишком длинный пароль'
  }
])

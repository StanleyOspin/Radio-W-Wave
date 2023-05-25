const aboutValidator = new JustValidate('#footer-form');

aboutValidator

  .addField('#message', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Введите сообщение'
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Слишком короткое сообщение'
    },
    {
      rule: 'maxLength',
      value: 2000,
      errorMessage: 'Слишком длинное сообщение'
    }
  ])
  .addField('#name', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Введите имя'
    },
    {
      rule: 'customRegexp',
      value: /[a-z, а-я]/gi,
      errorMessage: 'Ошибка'
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: "Должно быть не менее 2 символов"
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: "Слишком длинное имя"
    }

  ])
  .addField('#email', [
    {
    rule: 'required',
    value: true,
    errorMessage: 'Введите email',
    },
    {
    rule: 'email',
    errorMessage: 'Вы не корректно ввели email'
    }
  ])



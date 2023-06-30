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
  ]).onSuccess(async function () {
    let data = {
      message: document.getElementById('message').value,
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
    }
    let response = await fetch('mail.php', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json; charset = UTF-8"
      }
    })
    let result = await response.text()
    alert(result);
    console.log(data);
  })



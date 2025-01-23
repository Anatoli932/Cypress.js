  
   it('Строчные буквы в логине', function () {

    cy.get(mane_page.email).type(GerMan@Dolnikov.ru); // Ввели строчные буквы в логине
    cy.get(mane_page.password).type(data.password); // Ввели верный пароль
    cy.get(mane_page.login_button).click(); // Нажал войти
  
    cy.get(result_page.title).contains('Авторизация прошла успешно'); // Проверяю, что после авт. вижу текст
    cy.get(result_page.title).should('be.visible'); // Текст виден пользователю
    cy.get(result_page.close).should('be.visible'); // Есть крестик и он видит для пользователя
   })
  })

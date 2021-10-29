import React from 'react';
import {LoginPage} from '@patternfly/react-core';
import {MultiLoginForm} from "./MultiLoginForm"

class MultiLoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      langId: 'en'
    }
    this.usernameLabel={
      'en': "Username",
      'ua': "Ім'я користувача"
    }

    this.passwordLabel={
      'en': "Password",
      'ua': "Пароль"
    }

    this.usernameHelperLabel={
      'en': "Username is required",
      'ua': "Ім'я користувача обов'язкове"
    }

    this.passwordHelperLabel={
      'en': "Password is required",
      'ua': "Пароль обов'язковий"
    }

    this.nextLabel={
      'en': "Next",
      'ua': "Далі"
    }

    this.loginLabel={
      'en': "Login",
      'ua': "Увійти"
    }

    this.loginTitle={
      'en': "Log in to your account",
      'ua': "Увійдіть у свій обліковий запис"
    }

    this.loginSubtitle={
      'en': "Enter your single sign-on LDAP credentials.",
      'ua': "Введіть облікові дані LDAP для єдиного входу."
    }
    
    this.textContent={
      'en': "Taras Shevchenko National University of Kyiv",
      'ua': "Київський національний університет імені Тараса Шевченка"
    }

    this.onLanguageSelect = (event, selection, isPlaceholder) => {
      switch(selection)
      {
        case "English":
          this.setState({langId : 'en'});
          break;
        case "Українська":
          this.setState({langId : 'ua'});
          break;
      }
    };

  }


  render() {
    const {langId} = this.state;

    const images = {
      lg: '/assets/images/pfbg_1200.jpg',
      sm: '/assets/images/pfbg_768.jpg',
      sm2x: '/assets/images/pfbg_768@2x.jpg',
      xs: '/assets/images/pfbg_576.jpg',
      xs2x: '/assets/images/pfbg_576@2x.jpg'
    };

    return (
      <LoginPage
        //brandImgAlt="PatternFly logo"
        backgroundImgSrc={images}
        backgroundImgAlt="Images"
        textContent={this.textContent[langId]}
        loginTitle={this.loginTitle[langId]}
        loginSubtitle={this.loginSubtitle[langId]}
      >
        <MultiLoginForm
          onLanguageSelect={this.onLanguageSelect}
          usernameLabel={this.usernameLabel[langId]}
          passwordLabel={this.passwordLabel[langId]}
          usernameHelperLabel={this.passwordHelperLabel[langId]}
          passwordHelperLabel={this.passwordHelperLabel[langId]}
          nextLabel={this.nextLabel[langId]}
          loginLabel={this.loginLabel[langId]}
        />
      </LoginPage>
    );
  }
}

export {MultiLoginPage}
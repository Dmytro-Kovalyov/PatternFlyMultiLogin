import React from 'react';
import {
  Form,
  FormGroup,
  TextInput,
  ActionGroup,
  Button,
  LoginFooterItem,
  LoginPage,
  ListItem,
  InputGroup
}
from '@patternfly/react-core';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import { RedirectWithoutLastLocation } from 'react-router-last-location';
import EyeSlashIcon from '@patternfly/react-icons/dist/js/icons/eye-slash-icon';
import EyeIcon from '@patternfly/react-icons/dist/js/icons/eye-icon';
import TimesCircleIcon from '@patternfly/react-icons/dist/js/icons/times-circle-icon';

enum ValidatedOptions {
  success = 'success',
  error = 'error',
  warning = 'warning',
  default = 'default'
}

class MultiLoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isValidUsername: true,
      isValidPassword: true,
      passwordHidden: true,
      usernameEntered: false,
      usernameInvalidMessage: "",
      passwordInvalidMessage: ""
    }

    this.OnUsernameChange = username => {
      this.setState({ username });
    };

    this.OnPasswordChange = password => {
      this.setState({ password });
    };

    this.OnNextButtonClick = event => {
      if (!this.state.username)
      {
        this.setState({isValidUsername : false});
      }
      else
      {
        this.setState({usernameInvalidMessage : ""})
        this.setState({usernameEntered: true});
        this.setState({isValidUsername : true});
      }
    };

    this.OnLoginButtonClick = event => {
      if (!this.state.password)
      {
        this.setState({isValidPassword : false});
      }
      else
      {
        this.setState({passwordInvalidMessage : ""})
        this.setState({isValidPassword : true});
      }
    };

    this.setPasswordHidden = event => {
      this.setState({passwordHidden : !this.state.passwordHidden});
    };

  }
  

  render() {
    const {username, password, isValidUsername, isValidPassword,
        passwordHidden, usernameEntered, usernameInvalidMessage, passwordInvalidMessage} = this.state;

    return (
      <Form>
        <FormGroup
          label="Username"
          isRequired
          fieldId="login-form-username"
          helperTextInvalid="Login is required"
          validated={isValidUsername ? ValidatedOptions.default : ValidatedOptions.error}
        >
          <InputGroup>
            <TextInput
              isRequired
              type="text"
              id="login-form-username"
              name="login-form-username"
              isDisabled={usernameEntered}
              validated={isValidUsername ? ValidatedOptions.default : ValidatedOptions.error}
              value={username}
              onChange={this.OnUsernameChange}
            />
            { usernameEntered && (
            <Button
              variant="control"
              onClick={() => window.location.reload()}
            >
              <TimesCircleIcon/>
            </Button>)}
          </InputGroup>
        </FormGroup>

        { usernameEntered &&
          <FormGroup
            label="Password"
            isRequired
            fieldId="login-form-password"
            helperTextInvalid="Password is required"
            validated={isValidPassword ? ValidatedOptions.default : ValidatedOptions.error}
          >
            <InputGroup>
              <TextInput
                isRequired
                type={passwordHidden ? 'password' : 'text'}
                id="login-form-password"
                name="login-form-password"
                validated={isValidPassword ? ValidatedOptions.default : ValidatedOptions.error}
                value={password}
                onChange={this.OnPasswordChange}
              />
              <Button
                variant="control"
                onClick={this.setPasswordHidden}
              >
                {passwordHidden ? <EyeIcon /> : <EyeSlashIcon />}
              </Button>
            </InputGroup>
          </FormGroup>
        }

        <ActionGroup>
          { !usernameEntered && (
            <Button
              className="pf-c-button pf-m-primary pf-m-block"
              variant="primary"
              onClick={this.OnNextButtonClick}
            >
              Next
            </Button>)}
          { usernameEntered && (
            <Button
              className="pf-c-button pf-m-primary pf-m-block"
              variant="primary"
              onClick={this.OnLoginButtonClick}
            >
              Login
            </Button>)}
        </ActionGroup>
      </Form>
    );
  }
}

class MultiLoginPage extends React.Component {

  render() {
    const helperText = (
      <React.Fragment>
        <ExclamationCircleIcon />
        &nbsp;Invalid login credentials.
      </React.Fragment>
    );

    const listItem = (
      <React.Fragment>
        <ListItem>
          <LoginFooterItem href="#">Terms of Use </LoginFooterItem>
        </ListItem>
        <ListItem>
          <LoginFooterItem href="#">Help</LoginFooterItem>
        </ListItem>
        <ListItem>
          <LoginFooterItem href="#">Privacy Policy</LoginFooterItem>
        </ListItem>
      </React.Fragment>
    );

    const images = {
      lg: '/assets/images/pfbg_1200.jpg',
      sm: '/assets/images/pfbg_768.jpg',
      sm2x: '/assets/images/pfbg_768@2x.jpg',
      xs: '/assets/images/pfbg_576.jpg',
      xs2x: '/assets/images/pfbg_576@2x.jpg'
    };

    return (
      <LoginPage
        footerListVariants="inline"
        brandImgAlt="PatternFly logo"
        backgroundImgSrc={images}
        backgroundImgAlt="Images"
        footerListItems={listItem}
        textContent="This is placeholder text only. Use this area to place any information or introductory message about your application that may be relevant to users."
        loginTitle="Log in to your account"
        loginSubtitle="Enter your single sign-on LDAP credentials."
      >
        <MultiLoginForm></MultiLoginForm>
      </LoginPage>
    );
  }
}

export {MultiLoginPage}
import React from 'react';
import {
  Form,
  FormGroup,
  TextInput,
  ActionGroup,
  Button,
  InputGroup,
  Flex,
  FlexItem
}
from '@patternfly/react-core';

import {SelectLanguage} from "./SelectLanguage";
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
        this.setState({isValidPassword : true});
        window.location.replace("http://localhost:9000");
      }
    };

    this.setPasswordHidden = event => {
      this.setState({passwordHidden : !this.state.passwordHidden});
    };
  }
  

  render() {
    const {username, password, isValidUsername, isValidPassword,
        passwordHidden, usernameEntered, langId} = this.state;

    return (
      <div>
        <Flex justifyContent={{ default: 'justifyContentFlexEnd' }}>
          <FlexItem>
            <SelectLanguage
              onSelect={this.props.onLanguageSelect}
            />
          </FlexItem>
        </Flex>

        { !usernameEntered && (
        <Form>
          <FormGroup
            label={this.props.usernameLabel}
            isRequired
            fieldId="login-form-username"
            helperTextInvalid={this.props.usernameHelperLabel}
            validated={isValidUsername ? ValidatedOptions.default : ValidatedOptions.error}
          >
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
          </FormGroup>

          <ActionGroup>
            <Button
              className="pf-c-button pf-m-primary pf-m-block"
              variant="primary"
              onClick={this.OnNextButtonClick}
            >
              {this.props.nextLabel}
            </Button>
          </ActionGroup>
        </Form>)}

        { usernameEntered && (
        <Form>
          <FormGroup
            label={this.props.usernameLabel}
            isRequired
            fieldId="login-form-display"
          >
            <InputGroup>
              <TextInput
                type="text"
                id="login-form-display"
                name="login-form-display"
                isDisabled
                isReadOnly
                value={username}
              />
              
              <Button
                variant="control"
                onClick={() => window.location.reload()}
              >
                <TimesCircleIcon/>
              </Button>
            </InputGroup>
          </FormGroup>

          <FormGroup
            label={this.props.passwordLabel}
            isRequired
            fieldId="login-form-password"
            helperTextInvalid={this.props.passwordHelperLabel}
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

          <ActionGroup> 
              <Button
                className="pf-c-button pf-m-primary pf-m-block"
                variant="primary"
                onClick={this.OnLoginButtonClick}
              >
                {this.props.loginLabel}
              </Button>
          </ActionGroup>
        </Form>)}
      </div>
    );
  }
}

export {MultiLoginForm}
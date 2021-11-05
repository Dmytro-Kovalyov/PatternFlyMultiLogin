import React from 'react';
import { 
  PageSection,
  Form,
  FormGroup,
  TextInput,
  Checkbox,
  Popover,
  ActionGroup,
  Button,
  Card
  } from '@patternfly/react-core';

enum ValidatedOptions {
  success = 'success',
  error = 'error',
  warning = 'warning',
  default = 'default'
}

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName : '',
      email : '',
      password1 : '',
      password2 : '',
      passwordMessage : '',
      isValidPassword : true,
      isValidFullName : true,
      isValidEmail : true,
    }

    this.OnFullNameChange = fullName => {
      this.setState({ fullName });
    };

    this.OnEmailChange = email => {
      this.setState({ email });
    };

    this.OnPassword1Change = password1 => {
      this.setState({ password1 });
    };

    this.OnPassword2Change = password2 => {
      this.setState({ password2 });
    };

    this.OnRegisterButtonClick = event => {
      let valid = true;
      if (this.state.password1 != this.state.password2)
      {
        this.setState({isValidPassword : false});
        this.setState({passwordMessage : "Passwords need to match"})
        valid = false;
      }
      else
      {
        this.setState({isValidPassword : true});
      }
      if (this.state.password1 === "")
      {
        this.setState({isValidPassword : false});
        this.setState({passwordMessage : "Password is required"})
        valid = false;
      }
      if (this.state.fullName === "")
      {
        this.setState({isValidFullName : false});
        valid = false;
      }
      else
      {
        this.setState({isValidFullName : true});
      }
      if (this.state.email === "")
      {
        this.setState({isValidEmail : false});
        valid = false;
      }
      else
      {
        this.setState({isValidEmail : true});
      }
      if (valid)
      {
        console.log("Register user")
      }
    };
  }

  render() {
    const {fullName, email, password1, password2, isValidPassword, passwordMessage, isValidFullName, isValidEmail} = this.state

    return (
      <PageSection className="pf-m-limit-width pf-m-align-center pf-u-pt-3xl">
        <Form
          className="pf-u-w-100 pf-u-px-2xl pf-u-py-xl pf-u-background-color-100"
          style={{maxWidth: "600px"}}
        >
          <h1
            className="pf-u-font-size-2xl"
            style={{textAlign: "center"}}
          >
            Create an account
          </h1>

          <FormGroup
            label="Full name"
            isRequired
            fieldId="register-full-name"
            helperTextInvalid="Full name is required"
            validated={isValidFullName ? ValidatedOptions.default : ValidatedOptions.error}
          >
            <TextInput
            isRequired
            type="text"
            id="register-full-name"
            name="register-full-name"
            value={fullName}
            onChange={this.OnFullNameChange}
            validated={isValidFullName ? ValidatedOptions.default : ValidatedOptions.error}
          />
          </FormGroup>

          <FormGroup
            label="Email"
            isRequired
            fieldId="register-email"
            helperTextInvalid="Email is required"
            validated={isValidEmail ? ValidatedOptions.default : ValidatedOptions.error}
          >
            <TextInput
            isRequired
            type="text"
            id="register-email"
            name="register-email"
            value={email}
            onChange={this.OnEmailChange}
            validated={isValidEmail ? ValidatedOptions.default : ValidatedOptions.error}
          />
          </FormGroup>

          <FormGroup
            label="Password"
            isRequired
            fieldId="register-password1"
            helperTextInvalid={passwordMessage}
            validated={isValidPassword ? ValidatedOptions.default : ValidatedOptions.error}
          >
            <TextInput
            isRequired
            type="password"
            id="register-password1"
            name="register-password1"
            value={password1}
            onChange={this.OnPassword1Change}
            validated={isValidPassword ? ValidatedOptions.default : ValidatedOptions.error}
          />
          </FormGroup>

          <FormGroup
            label="Confirm password"
            isRequired
            fieldId="register-password2"
            validated={isValidPassword ? ValidatedOptions.default : ValidatedOptions.error}
          >
            <TextInput
            isRequired
            type="password"
            id="register-password2"
            name="register-password2"
            value={password2}
            onChange={this.OnPassword2Change}
            validated={isValidPassword ? ValidatedOptions.default : ValidatedOptions.error}
          />
          </FormGroup>

          <ActionGroup>
            <Button
              className="pf-c-button pf-m-primary pf-m-block"
              variant="primary"
              onClick={this.OnRegisterButtonClick}
            >
              Register
            </Button>
          </ActionGroup>

        </Form>
        
      </PageSection>
    );
  }
}

export { RegisterPage }
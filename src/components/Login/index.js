import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import {
  LoginContainer,
  LoginCard,
  LoginLogos,
  LoginForm,
  LoginsLabel,
  LoginInput,
  LoginShowPassword,
  LoginsButton,
  LoginErrorMsg,
} from '../../styledComponents'

class Login extends Component {
  state = {
    passwordShow: false,
    showSubmitError: false,
    errorMsg: '',
    username: '',
    password: '',
  }

  onCheckboxChanged = event => {
    this.setState({passwordShow: event.target.checked})
  }

  inputNameChanged = event => {
    this.setState({username: event.target.value})
  }

  inputPasswordChange = event => {
    this.setState({password: event.target.value})
  }

  submitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  submitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submittingForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.submitSuccess(data.jwt_token)
    } else {
      this.submitFailure(data.error_msg)
    }
  }

  render() {
    const {
      passwordShow,
      username,
      password,
      showSubmitError,
      errorMsg,
    } = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          console.log(isDarkTheme)
          const logoUrl = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <LoginContainer isDarkTheme={isDarkTheme}>
              <LoginCard isDarkTheme={isDarkTheme}>
                <LoginLogos src={logoUrl} alt="website logo" />
                <LoginForm onSubmit={this.submittingForm}>
                  <LoginsLabel htmlFor="username" isDarkTheme={isDarkTheme}>
                    USERNAME
                  </LoginsLabel>
                  <LoginInput
                    id="username"
                    type="text"
                    value={username}
                    placeholder="Username"
                    onChange={this.inputNameChanged}
                    isDarkTheme={isDarkTheme}
                  />
                  <br />
                  <LoginsLabel htmlFor="password" isDarkTheme={isDarkTheme}>
                    PASSWORD
                  </LoginsLabel>
                  <LoginInput
                    id="password"
                    type={passwordShow ? 'text' : 'password'}
                    value={password}
                    placeholder="Password"
                    onChange={this.inputPasswordChange}
                    isDarkTheme={isDarkTheme}
                  />
                  <LoginShowPassword isDarkTheme={isDarkTheme}>
                    <input
                      id="checkbox"
                      type="checkbox"
                      onChange={this.onCheckboxChanged}
                    />
                    <label htmlFor="checkbox">Show Password</label>
                  </LoginShowPassword>
                  <LoginsButton type="submit" isDarkTheme={isDarkTheme}>
                    Login
                  </LoginsButton>
                  {showSubmitError && (
                    <LoginErrorMsg>*{errorMsg}</LoginErrorMsg>
                  )}
                </LoginForm>
              </LoginCard>
            </LoginContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login

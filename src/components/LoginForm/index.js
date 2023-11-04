// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', showErrorMsg: false, errorMsg: ''}

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()
    console.log('Form submitted')
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    console.log(response)
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else if (username === '' && password === '') {
      this.onSubmitFailure(data.error_msg)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
    console.log(data.error_msg)
  }

  onSubmitFailure = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {showErrorMsg, errorMsg} = this.state
    return (
      <div className="login-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="login-logo"
        />
        <div className="login-card">
          <form className="main-card" onSubmit={this.submitForm}>
            <div className="img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
                alt="website logo"
                className="card-logo"
              />
            </div>
            <label htmlFor="username" className="labels">
              USERNAME
            </label>
            <br />
            <input
              type="text"
              id="username"
              className="inputs"
              onChange={this.onChangeUsername}
              placeholder="username"
            />
            <br />
            <label htmlFor="password" className="labels">
              PASSWORD
            </label>
            <br />
            <input
              type="password"
              id="password"
              className="inputs"
              onChange={this.onChangePassword}
              placeholder="Password"
            />
            <div className="button-container">
              <button type="submit" className="login-btn">
                Login
              </button>
            </div>
            {showErrorMsg && <p className="msg">{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}
export default LoginForm
